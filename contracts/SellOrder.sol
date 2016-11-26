pragma solidity ^0.4.4;

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
      startTime = 99;
      wattHours = 100;
      duration = 101;

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