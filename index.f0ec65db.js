document.querySelector("#search-box").addEventListener("input",(function(e){fetch(`https://restcountries.com/v2/name/${e.target.value}?fields=name,capital,population,flags,languages`).then((e=>(console.log(e.json()),e.json()))).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.f0ec65db.js.map
