// SCROLL: Fade in on scroll functionallity

const scrollElements = document.querySelectorAll('.scroll-elem');

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
  scrollElements.forEach(el => {
    if (isGridElement(el) && elementInView(el, percentageScroll)) {
      displayElement(el, 'scrolled-grid-elem');
    } 
    else if(elementInView(el, percentageScroll)) {
      displayElement(el, 'scrolled');
    }
  });

})

const isGridElement = (el) => {
  return el.id == 'grid-row';
}