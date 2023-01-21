!function(){var n=document.querySelector("#search-box");document.querySelector(".country-info");n.addEventListener("input",(function(n){fetch("https://restcountries.com/v3.1/name/{name}").then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))}))}();
//# sourceMappingURL=index.a91b3500.js.map
