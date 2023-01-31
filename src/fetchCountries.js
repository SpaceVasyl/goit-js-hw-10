import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 500;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-list");

export function fetchCountries(event) {
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((res) => res.json())
    .then((data) => data.length > 10 ? tooMuchCountries(data) : data.length > 1 ? listOFCountries(data): displayCountrie(data))
}
textInput.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));

function tooMuchCountries(data){
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  };

function listOFCountries(data){
    const nameCountry = null;
    for(let i = 0; i<data.length; i++){
        console.log(data[i].name);
    }
  }

function displayCountrie(data) {
    console.log(data);
}