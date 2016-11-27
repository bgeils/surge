var tab = [];

function getAllOrders(){
	var meta = MetaCoin.deployed();
	var text = "";

	meta.countSellOrder.call({from: account}).then(function(value) {
	  orderLen = value.valueOf();
	  for (i = 0; i < orderLen; i++) {
		  	meta.getSellOrder.call(i, {from: account}).then(function(value) {

			  	getSellOrderDetails(value);
			  	return null;
			  }).catch(function(e) {
			    console.log(e);
			    setStatus("Error getting a cell order; see log.");
			  });

		}
		return null;
	  }).catch(function(e) {
	    console.log(e);
	    setStatus("Error getting sell orders; see log.");
	  });
	  
	}


function getSellOrderDetails( address){

  var sell = SellOrder.at(address);
  
  inter(sell, address, true);
  
};

function inter(sell, address, build){
  var stime = null;
  var wh = null;
  var d = null;

  sell.getSeller.call({from: account}).then(function(value) {

    console.log("Seller addr: "+ value);

  }).catch(function(e) {
    console.log(e);
  });

  sell.getStartTime.call({from: account}).then(function(value) {

    console.log("Start Time: "+ value)
    stime = value;
  }).catch(function(e) {
    console.log(e);
  });

  sell.getWattHours.call({from: account}).then(function(value) {
    console.log("Watt Hours: "+ value)
    wh = value;
  }).catch(function(e) {
    console.log(e);
  });

  sell.getDuration.call({from: account}).then(function(value) {
    console.log("Duration: "+ value)
    d = value;
  }).catch(function(e) {
    console.log(e);
  }).then(function(){
  	if(build){
	  	tableBuilder(address, stime, wh, d);
	}else{
		buyOrderBuilder(address, stime, wh, d)
	}
  });
}

function tableBuilder(z, a, b, c){
	var table = document.getElementById("order-table");
  	var row = table.insertRow(0);
  	var cell0 = row.insertCell(0);
  	console.log(z)
  	cell0.innerHTML = '<button data-internalid="'+z+'" onclick="buyOrder(this);">Buy </button>'
  	var cell1 = row.insertCell(1);
  	cell1.innerHTML = a;
  	var cell2 = row.insertCell(2);
  	cell2.innerHTML = Math.round(b);
  	var cell3 = row.insertCell(3);
  	cell3.innerHTML = c;
}

function buyOrder(d){
	var val = d.getAttribute("data-internalid");
	console.log(val);
	post('/buy-order.html', {orderid: val, uname: account}, "get");

}