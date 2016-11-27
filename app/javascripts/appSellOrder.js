function createSellOrder(wh, d){
   var meta = MetaCoin.deployed();
   // var addr = "null";
   meta.createSellOrder({from: account, gas: 1550000}).then(function(instance) {
    // `instance` is a new instance of the abstraction.
    // If this callback is called, the deployment was successful.
    //console.log("New Sell Order created:" + instance);
    // addr = instance.address
    // console.log(addr)

  }).catch(function(e) {
  	console.log(e);
    // There was an error! Handle it.
  });

	
  

  //  SellOrder.new({from: account, gas: 1550000}).then(function(instance) {
  //   // `instance` is a new instance of the abstraction.
  //   // If this callback is called, the deployment was successful.
  //   console.log("New Sell Order Addr:"+ instance.address);
  //   //getSellOrderDetails(instance.address);
  //   return null;
  // }).catch(function(e) {
  //   // There was an error! Handle it.
  // });
}

function htmlSellOrder(){
	var params =getJsonFromUrl();

	var stime = document.getElementById("stime");
	var wh = document.getElementById("wh");
	var d = document.getElementById("d");

	// console.log(stime)
	// var cstime = stime.valueAsNumber;
	// console.log(cstime)
	// console.log(new Date(stime.valueAsNumber))

	stime.innerHTML = params['stime'];
	wh.innerHTML = params['wh'];
	d.innerHTML = params['d'];
}

function backHome(){
	var params =getJsonFromUrl();
	post('/surge.html', {uname: params['uname']}, "get");
}