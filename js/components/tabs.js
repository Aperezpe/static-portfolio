/**
 * - Positions the Pink line selector next to the selected tab,
 * - Hides other tab content and fadesIn selected tab content
 */

let tabHeight = 5.5;
let tabWidth = 16;

$(document).ready(() => {
  let tabContents = document.querySelectorAll('.tabs__content');
  
  for (let i = 1; i < tabContents.length ; i++) {
    $(tabContents[i]).css('display', 'none');
  }

})

const initShow = (index) => {
  return true ? index == 0 : false;
}



let curTabIndex = 0;
const handleLabelClick = (selectedTabIndex) => {
    
  if (curTabIndex != selectedTabIndex) {
    let tabContents = document.querySelectorAll('.tabs__content');

    $(tabContents[curTabIndex]).css('display', 'none')
    
    setTimeout(() => {
       $(tabContents[selectedTabIndex]).fadeIn(500);
    }, 0);
  }

  curTabIndex = selectedTabIndex;
}

const hasNumber = (str) => {
  let regex = /\d/g;
  return regex.test(str)
}

const generateDateRange = (exp) => {
  let months = [
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct',
    'Nov',
    'Dec'
  ]
  const experience = JSON.parse(exp);
  const startDate = new Date(experience.startDate);
  
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();
  
  if (!experience.endDate) return `${startMonth} ${startYear} - Present`;
  
  const endDate = new Date(experience.endDate);
  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();
  
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}