pragma solidity ^0.4.17;
import "../node_modules/zeppelin-solidity/contracts/token/erc721/ERC721Token.sol";

contract Vote is ERC721Token {
    address owner;
    mapping(address => bool) contributors;
    mapping(address => string[]) lobbyists;

    function Vote() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function addVerificationDocument(address lobbyist, string ipfsHash) public onlyOwner {
        lobbyists[lobbyist].push(ipfsHash);
    }

    function addAddress(address newAddress) public onlyOwner {
        contributors[newAddress] = true;
    }

    // function notifyVoters() public onlyOwner {

    // }
}
