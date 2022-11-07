/**
 * Positions the Pink line selector next to the selected tab,
 * fadesIn selected tab content, and fadesOut previously slected tab content
 */

let tabHeight = 5.5;
let curTabIndex = 0;
let biggestHeightContent = 0; 

$(document).ready(() => {
  //Code here that happens to curTab and selectedTab
  $(".tabs__content").each((tabIndex, tabContent) => {
    // biggestHeightContent = $(tabContent).height() > biggestHeightContent
      // ? $(tabContent).height()
      // : biggestHeightContent;
      if (tabIndex != 0) {
        $(tabContent).css('display', 'none')
      } else {
        $('#tabs-content-box').css('height', $(tabContent).height());
      }
  })

  // $('#tabs-content-box').css('height', biggestHeightContent);
});

$(".tabs__item").click((tab) => {
  let classList = tab.target.classList;

  let selectedTabIndex = 0;
  classList.forEach((cl) => {
    selectedTabIndex = hasNumber(cl) ? cl.slice(-1) : selectedTabIndex;
  });

  $('#tab-line-selector').css('top', `${selectedTabIndex * tabHeight}rem`);

  if (curTabIndex != selectedTabIndex) {

    $(".tabs__content").each((tabIndex, tabContent) => {
      if (tabIndex == curTabIndex) {
        $(tabContent).fadeOut()
      }
    })
  
    $(".tabs__content").delay(250).each((tabIndex, tabContent) => {
      if (tabIndex == selectedTabIndex) {
        $(tabContent).fadeIn();
        $('#tabs-content-box').css('height', $(tabContent).height());
      }
    })

    curTabIndex = selectedTabIndex;
  }


});

const hasNumber = (str) => {
  let regex = /\d/g;
  return regex.test(str)
}

