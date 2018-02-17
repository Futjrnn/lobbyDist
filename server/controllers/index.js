var ipfs = require('./ipfs.js');

module.exports.set = function(app) {

   ipfs.set(app);

   app.get('/', (req, res) => res.send('This is the node server, dog.'));
   app.listen(3000, () => console.log('Example app listening on port 3000!'));
}