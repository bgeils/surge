module.exports = {
  build: {
    "index.html": "index.html",
    "surge.html": "surge.html",
    "sell-order.html": "sell-order.html",
    "orders.html": "orders.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/appIndex.js",
      "javascripts/appSellOrder.js",
      "javascripts/utilityFunctions.js",
      "javascripts/appOrders.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
