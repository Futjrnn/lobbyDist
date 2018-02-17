const express = require('express')
const app = express()
const ipfsAPI = require('ipfs-api')
const fs = require('fs')
const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) // leaving out the arguments will default to these values

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/upload-image', (req, res) => {

	const files = [
	{
		path: 'cat.jpg',
		content: fs.readFileSync('cat.jpg')
	}
	]

	ipfs.add(files, function (err, res) {
		if (err || !res) return console.log(err)

			for (let i = 0; i < res.length; i++) {
				console.log('added file', res[i].hash, res[i].path)
			}
		})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// connect to ipfs daemon API server
