pragma solidity ^0.4.17;
import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";

contract Issue {
    uint256 totalContributions;

    function Issue() public {
        totalContributions = 0;
    }

    function contribute() public payable returns(uint256) {
        uint256 weiAmount = msg.value;
        totalContributions = SafeMath.add(totalContributions, weiAmount);

        return totalContributions;
    }

    function getTotalContributions() public view returns(uint256) {
        return totalContributions;
    }
}
