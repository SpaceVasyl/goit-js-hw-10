const e=document.querySelector("#search-box");document.querySelector(".country-info");e.addEventListener("input",(function(e){fetch(`https://restcountries.com/v2/name/${e.target.value}?fields=name,capital,population,flags,languages`).then((e=>{e.json()})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.092694b6.js.map
