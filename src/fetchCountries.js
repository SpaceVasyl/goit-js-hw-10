import {debounce, throttle} from 'debouncing';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');

export function fetchCountries(event) {
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((res) => res.json())
    .then((data) => tooMuchCountries(data))
}
textInput.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));

function tooMuchCountries(data){
    if (data.length > 10) {
      alert("Too many matches found. Please enter a more specific name.")
    }
  };