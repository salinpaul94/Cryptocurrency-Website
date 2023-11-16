let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");


let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
