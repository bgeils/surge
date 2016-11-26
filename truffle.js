module.exports = {
  build: {
    "index.html": "index.html",
    "surge.html": "surge.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/appIndex.js"
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
