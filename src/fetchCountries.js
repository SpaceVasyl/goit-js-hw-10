import {debounce, throttle} from 'debouncing';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 500;
const textInput = document.querySelector('#search-box');
const output = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
export function fetchCountries(event) {
    fetch(`https://restcountries.com/v2/name/${event.target.value}?fields=name,capital,population,flags,languages`)
    .then((res) => res.json())
    .then((data) => data.length > 10 ? tooMuchCountries(data) : data.length > 1 ? listOFCountries(data): displayCountry(data))
}
textInput.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));

function tooMuchCountries(data){
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  };

function listOFCountries(data){
    const nameCountry = null;
    for(let i = 0; i<data.length; i++){
        console.log(data[i]);
        const lastItem = document.createElement("li");
        lastItem.style.listStyle = "none";
        lastItem.style.display = "flex";
        lastItem.style.gap = "7px";
        lastItem.style.height = "20px";
        lastItem.innerHTML = `<img src="${data[i].flags.svg}" height='18'style="margin: 1px 0px;padding-top:6px;"><p style="margin: 0px; padding-bottom:1px;">${data[i].name}</p>`;
        output.append(lastItem);
    }
  }

function displayCountry(data) {
    console.log(data);
    output.remove();
    countryInfo.innerHTML = `<h2 style="font-size:40px"><img src="${data[0].flags.png}" height='18'style="margin-bottom: 5px;margin-right: 5px;">${data[0].name}</h2>
    <ul style="list-style:none ;">
    <li>Capital:${data[0].capital}</li>
    <li>Population:${data[0].population}</li>
    <li>Languages:${data[0].languages[0, 1, 2,3..toExponential].name}</li>
    </ul>`;
}
