/**
 * - Positions the Pink line selector next to the selected tab,
 * - Hides other tab content and fadesIn selected tab content
 */

let tabHeight = 5.5;
let curTabIndex = 0;
$(document).ready(() => {
  // Clone and remove all tab contents from DOM
  let tabContents = document.querySelectorAll('.tabs__content');

  for (let i = 1; i < tabContents.length ; i++) {
    $(tabContents[i]).fadeOut();
  }

})

let fadingOut;
let fadingIn;
$(".tabs__item").click(tab => {
  let classList = tab.target.classList;

  let selectedTabIndex = 0;
  classList.forEach((cl) => {
    selectedTabIndex = hasNumber(cl) ? parseInt(cl.slice(-1)) : selectedTabIndex;
  });

  $('#tab-line-selector').css('top', `${selectedTabIndex * tabHeight}rem`);

  if (curTabIndex != selectedTabIndex) {
    let tabContents = document.querySelectorAll('.tabs__content');

    $(tabContents[curTabIndex]).css('display', 'none')
    
    setTimeout(() => {
       $(tabContents[selectedTabIndex]).fadeIn(500);
    }, 0);
  }

  curTabIndex = selectedTabIndex;
})

const hasNumber = (str) => {
  let regex = /\d/g;
  return regex.test(str)
}
