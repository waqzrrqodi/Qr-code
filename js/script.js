const box = document.getElementById("colour-text");
      const buttons = document.querySelectorAll(".colour-button");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          box.style.color = button.classList[1];
        });
      });

// Generate QR Code
const qrCodeURL = document.querySelector('#qr-code');
const moduleChoice = document.querySelector('#module-choice');
const eyeChoice = document.querySelector('#eye-choice');
const qrCodeClr = document.querySelector('#qr-code-clr');

function generateQrCode() {
}