const e=document.querySelector("#search-box");document.querySelector(".country-info");e.addEventListener("input",(function(e){fetch(`https://restcountries.com/v2/name/${e.target.value}?fields=name,capital,population,flags,languages`).then((e=>function(e){console.log(e.json())}(e))).then((e=>{})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.bb9f8d40.js.map
