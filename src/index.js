import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handelFormSubmission(event){
  event.preventDefault();

}

document.querySelector("form").addEventListener("submit", handelFormSubmission);