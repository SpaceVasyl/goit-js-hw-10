import './css/styles.css';
import {fetchCountries} from './fetchCountries.js';
import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
const form = document.querySelector('#search-box');
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

form.addEventListener("input", debounce(searchCountries, DEBOUNCE_DELAY));
function searchCountries(e) {
    e.preventDefault();
    const inputCountry = e.target.value;
    if(!inputCountry){
        return;
    }
    fetchCountries(inputCountry).then((c)=>createMarkup(c))
}

function createMarkup(c){
if (c.length >10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
}
else if (c.length >1 && c.length<10){
output.innerHTML = c.map((a)=>{
const  {name, capital, population, flag, languages} = a
return `
<li>
<img src="${flag}" width=100 height=70></img>
<p>${name}</p>
</li>
`
})
}
else if (c.length === 1){
output.innerHTML = c.map((a)=>{
const  {name, capital, population, flag, languages} = a
return `

<img src="${flag}" width=100 height=70></img>
<h2>${name}</h2>
<p>${capital}</p>
`
})
}
else if (c){alert("Oops, there is no country with that name")}
}



