import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-info");

textInput.addEventListener("input", printOutput);
function printOutput(event) {
fetch('https://restcountries.com/v3.1/name/{name}').then(response=>{
   return response.json(); 
}).then(country => {console.log(country);
}).catch(error => {
    console.log(error);
})  
}



// output.textContent = event.currentTarget.value;