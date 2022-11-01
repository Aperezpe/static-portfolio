// Method that identifies scroll percentage of an element

const elementInView = (el, percentageScroll = 100) => {
const elementTop = el.getBoundingClientRect().top;
return (
  elementTop <= 
  ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};


const displayElement = (element) => {
  element.classList.add("scrolled");
}

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if(elementInView(el, 85)) {
      displayElement(el);
    }
  });
}

let scrollElements;
  
window.onload = () => {
  scrollElements = document.querySelectorAll('.js-scroll');
  console.log(scrollElements);
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

