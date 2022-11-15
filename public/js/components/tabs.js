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


$(".tabs__radio").click(tab => {
  let classList = tab.target.classList;

  let selectedTabIndex = 
    parseInt(document.querySelector('input[name="experience-tab"]:checked').value);


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
