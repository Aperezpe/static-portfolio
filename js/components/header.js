// Navbar functionallity

var prevScrollPos = window.scrollY;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  // reset navbar when position pixels == 0. 
  // when scrolls up, sticks navbar to top = 0. (Makes navbar re-appear)
  // makes navbar disappear when scrolled more than 38 pixels, and adds some transparency.
  if (currentScrollPos == 0) {
    document.getElementsByTagName('header')[0].classList.remove('navigation--transparent');
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementsByTagName('header')[0].style.transform = "translateY(0)";
  } else if (currentScrollPos > 38) {
    document.getElementsByTagName('header')[0].style.transform = `translateY(-100%)`;
    document.getElementsByTagName('header')[0].classList.add('navigation--transparent');
  }
  prevScrollPos = currentScrollPos;
}