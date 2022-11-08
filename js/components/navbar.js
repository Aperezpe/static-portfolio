// NAVBAR: Navbar functionallity to collapse and appear on scroll

var prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  var currentScrollPos = window.scrollY;

  // reset navbar when position pixels == 0. 
  // when scrolls up, sticks navbar to top = 0. (Makes navbar re-appear)
  // makes navbar disappear when scrolled more than 38 pixels, and adds some transparency.
  if (currentScrollPos == 0) {
    document.getElementById('navbar').classList.remove('navigation--transparent');
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').style.transform = "translateY(0)";
  } else if (currentScrollPos > 38) {
    document.getElementById('navbar').style.transform = `translateY(-100%)`;
    document.getElementById('navbar').classList.add('navigation--transparent');
  }
  prevScrollPos = currentScrollPos;
})

const elementsToBlur = [
  document.getElementById('navigation-logo-box'),
  document.getElementById('main'),
  document.getElementById('body'),
  document.getElementById('footer'),
  document.getElementById('contact-info-left'),
  document.getElementById('contact-info-right')
]

$('.navigation__link').click(() => {
  handlCloseMenu();
});


$('input[id=navi-toggle]').change(function () {
  if ($(this).is(':checked')) {
    elementsToBlur.forEach((el) => el.classList.remove('blur'));
  } else {
    elementsToBlur.forEach((el) => el.classList.add('blur'));
    document.addEventListener('touchstart', onTouchOutsideMenu, true);
  }
});

onTouchOutsideMenu = (e) => {
  if ($(e.target).closest("#navigation-list").length === 0
    && $(e.target).closest("#navigation-button").length === 0) {
    handlCloseMenu();
    document.removeEventListener('touchstart', onTouchOutsideMenu, true);
  }
}

handlCloseMenu = () => {
  document.getElementById('navi-toggle').checked = true;
  elementsToBlur.forEach((el) => el.classList.remove('blur'));
}