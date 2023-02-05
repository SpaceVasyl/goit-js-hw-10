import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 500;
const ENDPOINT = "https://restcountries.com/v2";
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function fetchCountries(query) {
   return fetch(`${ENDPOINT}/name/${query}`)
  .then((res)=> res.json());
}

export default {fetchCountries};