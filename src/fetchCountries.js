import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 500;
const textInput = document.querySelector('#search-box');

export function fetchCountries(event) {
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((res) => res.json())
    .then((data) => data.length > 10 ? tooMuchCountries(data) : data.length > 1 ? listOFCountries(data): alert(data))
}
textInput.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));

function tooMuchCountries(data){
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  };

function listOFCountries(data){
    console.log(data);
  }


