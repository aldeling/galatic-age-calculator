import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetAge from './planetAge';

function handelFormSubmission(event){
  event.preventDefault();
  const age = document.querySelector('#number').value;
  const planetAge = new PlanetAge(age);
  const ageOne = planetAge.calculateMercuryAge;
  document.getElementById("#ageOne").innerText;
  document.getElementById("#ageTwo").innerText;
  document.getElementById("#ageThree").innerText;
  document.getElementById("#ageFour").innerText;
}

document.querySelector("form").addEventListener("submit", handelFormSubmission);