import { API_KEY } from './config.js';

const box = document.getElementById("colour-text");
const buttons = document.querySelectorAll(".colour-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    box.style.color = button.classList[1];
    const choosenColour = button.classList[1];
    console.log(choosenColour);});
  });

// Generate QR Code
const qrCodeURL = document.querySelector('#qr-code');
const moduleChoice = document.querySelector('#module-choice');
const eyeChoice = document.querySelector('#eye-choice');
const qrCodeClr = document.querySelector('#qr-code-clr');


const options = {
  method: 'POST',
  headers: {
    Accept: 'image/svg+xml',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
  },
  body: JSON.stringify({
    data: 'https://koebra.tk',
    style: {
      module: {color: 'black', shape: 'default'},
      inner_eye: {shape: 'default'},
      outer_eye: {shape: 'default'},
    },
    size: {width: 200, quiet_zone: 4, error_correction: 'M'},
    output: {filename: 'qrcode', format: 'svg'}
  })
};

function generateQrCode() {
  fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
    .then(response => response)
    .then(response => console.log(response))
    .catch(err => console.error(err));
    console.log('generateQrCode() ran');
    response.json().then(function(data) {
      console.log(data);
      document.getElementById("qr-code").innerHTML = data;
    }
    );
}

generateQrCode();