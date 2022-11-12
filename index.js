/**
 * onLoad triggers before all elements have been loaded on DOM
 */
$(document).ready(() => {
  //TODO: Do this dynamically
  var msDuration = $('html').css('--splash-screen-duration');

  $(document.body).css('overflow-y', 'hidden');

  setTimeout(() => {
    $(".splash-screen").remove();
    $(document.body).css('overflow-y', 'auto');

  }, msDuration);

});

const getPorfolioData = async () => {
  let portfolioData = await (await fetch('portfolio-data.json')).json();

  if (!sessionStorage.getItem('portfolioData')) 
    sessionStorage.setItem('portfolioData', JSON.stringify(portfolioData));

  return portfolioData;
}

const onLoad = () => {
  storeScrollElements();
}