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

function generateQrCode() {
  const choosenColour = document.querySelector('#colour-text').style.color;
  const choosenEye = eyeChoice.options[eyeChoice.selectedIndex].value;
  const choosenModule = moduleChoice.options[moduleChoice.selectedIndex].value;
  event.preventDefault();
  console.log('Generating QR Code...');
  console.log(choosenColour);
}