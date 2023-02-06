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
countryInfo.innerHTML = "";
output.innerHTML = c.map((a)=>{
const  {name, flag} = a
return `
<li style="list-style: none; display: flex"; height: 20px;>
<img src="${flag}" style="margin-top: 2px;" width=32 height=21 alt="flag"></img>
<p style="margin: 0; margin-left: 5px"> ${name}</p>
</li>
`
}).join('')
}
else if (c.length === 1){
output.innerHTML = "";
countryInfo.innerHTML = c.map((a)=>{
const  {name, capital, population, flag, languages } = a;
let lang = [];
for(let i = 0; i >= languages.length; i++){
    lang.push(languages[0].name);
}
console.log(lang);
return `
<h1><img src="${flag}" width=60 height=35 alt="flag"></img>${name}</h1>
<p>Capital: ${capital}</p>
<p>Population: ${population}</p>
<p>Languages: </p>
`
})
}
else if (c){
    Notiflix.Notify.failure("Oops, there is no country with that name")}
}



