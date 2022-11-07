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