pragma solidity ^0.4.17;
import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";
import "./voting_contract.sol";

contract Issue {
    uint256 totalContributions;
    string issueHash;
    mapping(address => uint256) public contributors;
    mapping(address => string[]) public verifications;

    Vote vote = Vote(msg.sender);

    function Issue() public {
        totalContributions = 0;
    }

    function setIssueHash(string inputHash) public {
        issueHash = inputHash;
    }

    function contribute() public payable returns(uint256) {
        require(msg.value > 0);
        uint256 amount = msg.value;

        vote.addAddress(msg.sender);                    

        totalContributions = SafeMath.add(totalContributions, amount);
        contributors[msg.sender] += amount;

        return totalContributions;
    }

    function verify(address lobbyist, string ipfsHash) public returns(address) {
        verifications[lobbyist].push(ipfsHash);
        vote.addVerificationDocument(lobbyist, ipfsHash);
        return lobbyist;
    }

    function getTotalContributions() public view returns(uint256) {
        return totalContributions;
    }

    function getContribution() public view returns(uint256) {
        return contributors[msg.sender];
    }

    function getHash() public view returns(string) {
        return issueHash;
    }

    // function initiateVote() public {
    //     vote.notifyVoters();
    // }
}
