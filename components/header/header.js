// Navbar functionallity

var prevScrollPos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  // reset navbar when position pixels == 0. 
  // when scrolls up, sticks navbar to top = 0. (Makes navbar re-appear)
  // makes navbar disappear when scrolled more than 38 pixels, and adds some transparency.
  if (currentScrollPos == 0) {
    document.getElementById('navbar').classList.remove('header--transparent');
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').style.top = "0";
  } else if (currentScrollPos > 38) {
    var navBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') ;
    document.getElementById('navbar').style.top = `calc(${navBarHeight} * -1)`;
    document.getElementById('navbar').classList.add('header--transparent');
  } 
  prevScrollPos = currentScrollPos;
}


// Reload on logo click
const logoIcon = document.getElementById('header-logo');

function reload() {
  reload = location.reload();
  location.href = "";
}

logoIcon.addEventListener('click', reload, false);