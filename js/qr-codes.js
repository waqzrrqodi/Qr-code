// Mobile menu
const BurgerIcon = document.querySelector('#burger-icon');
const navbarMenu = document.querySelector('#nav-links');


BurgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});