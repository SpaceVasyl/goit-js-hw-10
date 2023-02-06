import './css/styles.css';
import FETCH from './fetchCountries.js';
import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 500;
const form = document.querySelector('#search-box');
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

form.addEventListener("input", debounce(searchCountries, DEBOUNCE_DELAY));
function searchCountries(e) {
    e.preventDefault();
    const inputCountry = e.target.value.trim();
    if(!inputCountry){
        return
    }
    FETCH.fetchCountries(inputCountry).then((c)=>{if (c.length === 0) throw new Error("No data"); createMarkup(c);
});
}

function createMarkup(c){
{}
    console.log();
output.innerHTML = `
<li>
<p>${(as)}</p>
</li>
`}
