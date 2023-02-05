import './css/styles.css';
import FETCH from './fetchCountries.js';
// import Notiflix from 'notiflix';

FETCH.fetchCountries("ukraine").then(console.log);