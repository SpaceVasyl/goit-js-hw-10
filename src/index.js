import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-info");

textInput.addEventListener("input", fetchCountries);
function fetchCountries(event) {
    // console.log(event.target.value);
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((response) => {
      return printOutput(response);
    })
    .then((country) => {
        // console.log(country);
      })
    .catch((error) => {
      console.log(error);
    });
}

function printOutput (response){
console.log(response.json());
}


