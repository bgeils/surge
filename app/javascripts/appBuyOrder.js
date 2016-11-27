function attemptBuy(){
	var params = getJsonFromUrl();
	orderid = params['orderid'];
	console.log(orderid);

	document.getElementById("order-num").innerHTML = orderid;

	returnOrderDetails(orderid);
}

function returnOrderDetails(address){
	var sell = SellOrder.at(address);
  
  inter(sell, address, false);
}

function buyOrderBuilder(z, a, b, c){
	var stime = document.getElementById("stime");
  	stime.innerHTML = a;

  	var wh = document.getElementById("wh");
  	wh.innerHTML = b;

  	var d = document.getElementById("d");
  	d.innerHTML = c;

  	document.getElementById("wattHours").value = b;
  	//document.getElementById("duration").value = c;

}

function submitPurchase(){
	console.log("submitted purchase")

	var params = getJsonFromUrl();
	orderid = params['orderid'];

	var sell = SellOrder.at(orderid);
	var amount = parseInt(document.getElementById("wattHours").value);
	sell.addBuyer(amount, 1, {from: account, gas: 1550000}).then(function(value) {
	    
	    console.log(value)
	}).catch(function(e) {
		console.log(e);
	});
}