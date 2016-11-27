function createSellOrder(stime, wh, d, p){
   var meta = MetaCoin.deployed();
   // var addr = "null";
   meta.createSellOrder( stime, wh, d , p*100, {from: account, gas: 1550000}).then(function(instance) {
  		console.log(wh)
  		console.log(d)
  		console.log(instance)
  }).catch(function(e) {
  	console.log(e);
    // There was an error! Handle it.
  });
}

function htmlSellOrder(){
	var params =getJsonFromUrl();

	var stime = document.getElementById("stime");
	var wh = document.getElementById("wh");
	var d = document.getElementById("d");
	var p = document.getElementById("p");

	// console.log(stime)
	// var cstime = stime.valueAsNumber;
	// console.log(cstime)
	// console.log(new Date(stime.valueAsNumber))

	stime.innerHTML = params['stime'];
	wh.innerHTML = params['wh'];
	d.innerHTML = params['d'];
	p.innerHTML = params['p'];
}

function backHome(){
	var params =getJsonFromUrl();
	post('/surge.html', {uname: params['uname']}, "get");
}