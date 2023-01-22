const e=document.querySelector("#search-box"),t=document.querySelector(".country-info");e.addEventListener("input",(function(e){fetch(`https://restcountries.com/v2/name/${e.target.value}?fields=name,capital,population,flags,languages`).then((e=>function(e){console.log(e.json()),t.textContent=e.json()}(e))).then((e=>{})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.50b83bc5.js.map
