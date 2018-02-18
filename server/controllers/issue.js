'use strict';

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
const uuid = require('uuid/v4');
const fs = require('fs');
const Promise = require('bluebird');
const _ = require('lodash');

function issueToJSON(issue, fileHash) {
	let split = issue.split(/\r?\n/);
	return { title: split[0], description: split[1], hash: fileHash };
}

module.exports.set = function(app) {

	app.post('/issues/add', (req, res) => {
		console.log(req.body);
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

			res.send({"hash": ipfsResponse[0].hash});
		});
	});

	app.get('/issues', (req, res) => {

		ipfs.pin.ls({type: 'recursive'}, function (err, pinset) {
			if (err) {
				throw err
			}

			let hashes = [];
			Promise.mapSeries(pinset, (p) => {
				hashes.push(p.hash);
				return ipfs.files.cat(p.hash);
			})
			.then((files) => {

				let issues = [];

				let i = 0;
				_.each(files, (file) => {
					let fileHash = hashes[i];
					issues.push(issueToJSON(file.toString('utf-8'), fileHash));
					i = i + 1;
				});

				res.send(issues);
			});
		});
	});
}