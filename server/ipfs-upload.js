var ipfsAPI = require('ipfs-api')
var fs = require('fs')

// connect to ipfs daemon API server
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) // leaving out the arguments will default to these values

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