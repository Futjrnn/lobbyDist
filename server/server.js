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

	let filePath = __dirname + '/tmp/file-' + uuid() + ".txt";

	fs.writeFileSync(filePath, text, 'utf-8', err => console.log(err));

	console.log('The file was saved here: ' + filePath);

	console.log(filePath);

	const files = [
	{
		content: fs.readFileSync(filePath)
	}];

	let hash;
	ipfs.add(files, function (err, ipfsResponse) {
		if (err || !ipfsResponse) return console.log(err);
		console.log('added file', ipfsResponse[0].hash, ipfsResponse[0].path);
		hash = ipfsResponse[0].hash;

		console.log(ipfsResponse);

		console.log('sending back the hash: ' + hash);
		res.send(hash);
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));