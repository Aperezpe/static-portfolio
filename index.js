$(document).ready(() => {
  //TODO: Do this dynamically
  // var msDuration = $('html').css('--splash-screen-duration').slice(0, 5);

  setTimeout(() => {
    $(".splash-screen").remove();
  }, 2000);
});