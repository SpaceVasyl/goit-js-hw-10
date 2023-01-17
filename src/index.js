import './css/styles.css';
const DEBOUNCE_DELAY = 300;

const country = fetch('https://restcountries.com/v2/all?fields=name,capital,currencies')
console.log(country);