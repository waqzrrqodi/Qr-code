// Mobile menu
const BurgerIcon = document.querySelector('#burger-icon');
const navbarMenu = document.querySelector('#nav-links');


BurgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// Get qr codes from device storage for later
// const qrCodes = document.querySelector('#qr-codes');

// function getQrCodes() {
//     let qrCodes = localStorage.getItem('qrCodes');
//     if (qrCodes === null) {
//         qrCodesObj = [];
//     } else {
//         qrCodesObj = JSON.parse(qrCodes);
//     }
//     let html = '';
//     qrCodesObj.forEach(function (element, index) {
//         html += `
//         <div class="qr-code">
//         <div class="qr-code__img">
//             <img src="${element}" alt="QR Code">
//         </div>
//         <div class="qr-code__btns">
//             <button class="qr-code__btn" onclick="deleteQrCode(${index})">Delete</button>
//             <button class="qr-code__btn" onclick="downloadQrCode(${index})">Download</button>
//         </div>
//         </div>
//         `;
//     });
//     let qrCodesElm = document.getElementById('qr-codes');
//     if (qrCodesObj.length != 0) {
//         qrCodesElm.innerHTML = html;
//     } else {
//         qrCodesElm.innerHTML = `Nothing to show! Use "Generate QR Code" section above to generate a QR Code.`;
//     }
//     }

