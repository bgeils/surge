pragma solidity ^0.4.2;

import "ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {
  mapping (address => uint) balances;
  address[] sellOrders;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  function MetaCoin() {
    balances[msg.sender] = 10000;
  }
  
  function sendCoin(address receiver, uint amount) returns(bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    Transfer(msg.sender, receiver, amount);
    return true;
  }

  function getBalanceInEth(address addr) returns(uint){
    return ConvertLib.convert(getBalance(addr),2);
  }

  function getBalance(address addr) returns(uint) {
    return balances[addr];
  }
  
  function getSellOrder(uint loc) returns(address){
      return sellOrders[loc];
  }
  
  function countSellOrder() returns(uint){
      return sellOrders.length;
  }
  
  function createSellOrder(){
      address newContract = new SellOrder();
      sellOrders.push(newContract);
  }
}

contract SellOrder {
    struct BuyOrder {
        address buyer; // address of the buyer
        uint buyWattHours; // amount of watt hours the buyer requests
        uint buyStartTime; // request time to start receiving energy
        uint duration; // duration of requested energy
    }
    
  address public seller; // address of the person selling the energy
  uint public startTime; // start time of the distribution of energy
  uint public wattHours; // amount of power being sold in watt hours
  uint public duration; // amount of time the power will be distributed for
  
   // A dynamically-sized array of `BuyOrder` structs that are verified
  BuyOrder[] public buyOrders;
  
  function SellOrder(){
      seller = msg.sender;
  }
  
  function setOrder(uint startTime, uint wattHours, uint duration){
    startTime = startTime;
    wattHours = wattHours;
    duration = duration;
  }
  
  function getSeller() returns(address){
      return seller;
  }

  function getStartTime() returns(uint){
      return startTime;
  }

  function getWattHours() returns(uint){
      return wattHours;
  }

  function getDuration() returns(uint){
      return duration;
  }
  
}