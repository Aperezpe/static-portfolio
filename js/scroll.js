// SCROLL: Fade in on scroll functionallity

let scrollElements = [];

const storeScrollElements = () => {
  scrollElements = document.querySelectorAll('.scroll-elem');
  sessionStorage.setItem('scroll-elements', JSON.stringify(scrollElements));

  console.log(scrollElements);
}

/**
 * Percentage that the component have to be scrolled in order to appear on page
 */
const percentageScroll = 80;

/**
 * Method that decides if the element is in the view, depending on percentageScroll
 */
const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

/**
 * Method that adds a class into an element.
 */
const displayElement = (element, cl) => {
  element.classList.add(cl);
}

window.addEventListener('scroll', () => {
  // For each '.scroll-elem' element found

  scrollElements = scrollElements 
    ? Array.from(scrollElements) 
    : Array.from(JSON.parse(sessionStorage.getItem('scroll-elements')));
  
  scrollElements.forEach(el => {
    if (elementInView(el, percentageScroll) && isGridElement(el) ) {
      displayElement(el, 'scrolled-grid-elem');
    } 
    else if(elementInView(el, percentageScroll)) {
      displayElement(el, 'scrolled');
    }
  });

})

const isGridElement = (el) => {
  return el.classList.contains('noteworthy-project');
}