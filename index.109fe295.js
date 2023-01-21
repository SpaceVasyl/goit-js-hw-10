const e=document.querySelector("#search-box");document.querySelector(".country-info");e.addEventListener("input",(function(e){fetch("https://restcountries.com/v3.1/name/{name}").then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.109fe295.js.map
