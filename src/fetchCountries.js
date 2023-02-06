import Notiflix from "notiflix";
const ENDPOINT = "https://restcountries.com/v2";
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

 export function fetchCountries(query) {
  return fetch(`${ENDPOINT}/name/${query}`)
  .then((res)=> res.json())
  .catch((error)=> Notiflix.Notify.error("Oops, there is no country with that name"));
}


