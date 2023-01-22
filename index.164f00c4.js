document.querySelector("#search-box").addEventListener("input",(function(n){fetch("https://restcountries.com/v2/name/".concat(n.target.value,"?fields=name,capital,population,flags,languages")).then((function(n){return console.log(n.json()),n.json()})).catch((function(n){console.log(n)}))}));
//# sourceMappingURL=index.164f00c4.js.map
