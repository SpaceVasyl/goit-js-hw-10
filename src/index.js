import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-info");

textInput.addEventListener("input", printOutput);
function printOutput(event) {
    output.textContent = event.currentTarget.value;
}


// const country = fetch('https://restcountries.com/v2/all?fields=name,capital,currencies').then(data=>{
//    console.log(country); 
// })
