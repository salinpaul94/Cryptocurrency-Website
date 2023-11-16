let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.inr;
  eth.innerHTML = response.ethereum.inr;
  
});
