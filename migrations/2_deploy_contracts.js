var Issue = artifacts.require("Issue.sol");
var Vote = artifacts.require("Vote.sol");
var LobbyDist = artifacts.require("LobbyDist.sol");

module.exports = function(deployer) {
   deployer.deploy(LobbyDist).then(() => {
       return deployer.deploy(Issue).then(() => {
            return deployer.deploy(Vote);
       })
   })
}
