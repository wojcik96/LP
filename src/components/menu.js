const navigationIcon = document.querySelector('.navigation-icon');
const navigationLink = [...document.querySelectorAll('.navigation__link')];
function menuOnOff() {
   document.querySelector('.navigation').classList.toggle('navigation--burger-active')
   navigationIcon.classList.toggle('navigation-icon--active')
}

navigationIcon.addEventListener("click", menuOnOff)

navigationLink.forEach(link => link.addEventListener('click', menuOnOff))