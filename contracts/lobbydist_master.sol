pragma solidity ^0.4.17;
import "./issue_contract.sol";

contract LobbyDist {
    address owner;
    address[] issues;

    function createIssue(string ipfsHash) public returns(address[]) {
        Issue issue = Issue(owner);
        issue.setIssueHash(ipfsHash);
        issues.push(issue);

        return issues;
    }

    function getIssues() public view returns(address[]) {
        return issues;
    }
}