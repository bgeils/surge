function getAllOrders(){
	var meta = MetaCoin.deployed();
	var text = "";

	meta.countSellOrder.call({from: account}).then(function(value) {
	  orderLen = value.valueOf();

	  console.log(orderLen);
	  



	  for (i = 0; i < orderLen; i++) {
	  	meta.getSellOrder.call(0, {from: account}).then(function(value) {
		  	console.log(value);

		  	getSellOrderDetails(value);
		  	return null;
		  }).catch(function(e) {
		    console.log(e);
		    setStatus("Error getting a cell order; see log.");
		  });
		}

		//console.log(text);


		return null;
	  }).catch(function(e) {
	    console.log(e);
	    setStatus("Error getting sell orders; see log.");
	  });
	}