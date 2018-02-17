'use strict';

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
const uuid = require('uuid/v4');
const fs = require('fs');
const Promise = require('bluebird');
const _ = require('lodash');

const rootHash = 'QmPhnvn747LqwPYMJmQVorMaGbMSgA7mRRoyyZYz3DoZRQ';

function issueToJSON(issue) {
	let split = issue.split(/\r?\n/);
	return { title: split[0], description: split[1] };
}

module.exports.set = function(app) {

	app.post('/issues/add', (req, res) => {
		let text = req.body.title + "\n" + req.body.description;

		let title = req.body.title.replace(/\s+/g, '-').toLowerCase();
		let fileName = title + '-' + uuid() + '.txt';
		let filePath = __dirname + '/tmp/' + fileName;

		fs.writeFileSync(filePath, text, 'utf-8', err => console.log(err));

		const files = [{ 
			content: fs.readFileSync(filePath)
		}];

		ipfs.add(files, function (err, ipfsResponse) {
			if (err || !ipfsResponse) return console.log(err);

			console.log('added file', fileName);
			console.log('with hash: ' + ipfsResponse[0].hash);
			console.log('at path: ' + ipfsResponse[0].path);

			fs.unlink(filePath);

			res.send(ipfsResponse[0].hash);
		});
	});

	app.get('/issues', (req, res) => {

		ipfs.pin.ls({type: 'recursive'}, function (err, pinset) {
			if (err) {
				throw err
			}

			Promise.map(pinset, (p) => {
				return ipfs.files.cat(p.hash);
			})
			.then((files) => {
				let issues = [];

				_.each(files, (file) => {
					issues.push(issueToJSON(file.toString('utf-8')));
				});

				res.send({"issues": issues});
			});
		});
	});
}