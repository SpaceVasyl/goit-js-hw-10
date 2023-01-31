import './css/styles.css';
import {debounce, throttle} from 'debouncing';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-info");


function fetchCountries(event) {
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((res) => res.json())
    .then((data) => console.log(data, data.length))
}
textInput.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));


