$(document).ready(() => {
  //TODO: Do this dynamically
  // var msDuration = $('html').css('--splash-screen-duration').slice(0, 5);

  $(document.body).css('overflow-y', 'hidden');

  setTimeout(() => {
    $(".splash-screen").remove();
    $(document.body).css('overflow-y', 'auto');

  }, 2000);
});