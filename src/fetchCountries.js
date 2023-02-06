const ENDPOINT = "https://restcountries.com/v2";
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function fetchCountries(query) {
   return fetch(`${ENDPOINT}/name/${query}`)
  .then((res)=> res.json());
}

export default {fetchCountries};