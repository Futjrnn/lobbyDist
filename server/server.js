const express = require('express');
const app = express();
const ipfsAPI = require('ipfs-api');
const fs = require('fs');
const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('This is the node server, dog.'));

app.post('/add-issue', (req, res) => {
	let text = req.body.title + "\n" + req.body.description;

	let title = req.body.title.replace(/\s+/g, '-').toLowerCase();
	let filePath = __dirname + 
		'/tmp/' + 
		title + 
		'-' + uuid() + 
		".txt";

	fs.writeFileSync(filePath, text, 'utf-8', err => console.log(err));

	const files = [{ content: fs.readFileSync(filePath) }];

	ipfs.add(files, function (err, ipfsResponse) {
		if (err || !ipfsResponse) return console.log(err);

		console.log('added file', filePath);
		console.log('sending back the hash: ' + ipfsResponse[0].hash);
		
		fs.unlink(filePath);

		res.send(ipfsResponse[0].hash);
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));