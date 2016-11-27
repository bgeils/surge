var accounts;
var account;

// Used in surge.html

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();

    var address_element = document.getElementById("address");
    address_element.innerHTML = account;

  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
  if (window.location.href.match('surge.html') != null) {

    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      //account = accounts[0];
      account = getJsonFromUrl()['uname']
      
      console.log(accounts);
      console.log("account:"+ account)

      refreshBalance();
      
    });
  } else if(window.location.href.match('index.html') != null){

    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      
      var ex1 = document.getElementById("ex1");
      var ex2 = document.getElementById("ex2");
      ex1.innerHTML = accounts[0];
      ex2.innerHTML = accounts[1];

    });

  } else if(window.location.href.match('sell-order.html') != null){
    var params = getJsonFromUrl();
    
    account = getJsonFromUrl()['uname'];

    createSellOrder(params['wh'], params['d']);
    htmlSellOrder();
  } else if(window.location.href.match('orders.html') != null){

    account = getJsonFromUrl()['uname'];

    getAllOrders();
  } else if(window.location.href.match('buy-order.html') != null){

    account = getJsonFromUrl()['uname'];

    attemptBuy();
  } 
}

function gotoSellOrder(){
  var startTime = document.getElementById("startTime").value;
  var wattHours = document.getElementById("wattHours").value;
  var duration = document.getElementById("duration").value;
  post('/sell-order.html', {stime: startTime, wh: wattHours, d: duration, uname: account}, "get");
}

function viewSellOrders(){
  post('/orders.html', {uname: account}, "get");
}

