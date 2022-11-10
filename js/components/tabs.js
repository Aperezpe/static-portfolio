/**
 * - Positions the Pink line selector next to the selected tab,
 * - Hides other tab content and fadesIn selected tab content
 */

let tabHeight = 5.5;
let tabWidth = 16;
let curTabIndex = 0;
$(document).ready(() => {
  // Clone and remove all tab contents from DOM
  let tabContents = document.querySelectorAll('.tabs__content');

  for (let i = 1; i < tabContents.length ; i++) {
    $(tabContents[i]).css('display', 'none');
  }

})


$(".tabs__item").click(tab => {
  let classList = tab.target.classList;

  let selectedTabIndex = 0;
  classList.forEach((cl) => {
    selectedTabIndex = hasNumber(cl) ? parseInt(cl.slice(-1)) : selectedTabIndex;
  });

  /** Move tab selector left to righ if in phone screen, else top to bottom */ 
  if (mediaQuery.phone.matches) {
    $('#tab-line-selector').css('left', `${selectedTabIndex * tabWidth}rem`);
  } else {
    $('#tab-line-selector').css('top', `${selectedTabIndex * tabHeight}rem`);
  }


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
