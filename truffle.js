module.exports = {
  build: {
    "index.html": "index.html",
    "surge.html": "surge.html",
    "sell-order.html": "sell-order.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/appIndex.js",
      "javascripts/appSellOrder.js",
      "javascripts/utilityFunctions.js"
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
