import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
// const output = document.querySelector(".country-info");

textInput.addEventListener("input", printOutput);
function printOutput(event) {
    // console.log(event.target.value);
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((response) => {
        console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}


// .then((country) => {
    //   console.log(country);
    // })
// output.textContent = event.currentTarget.value;