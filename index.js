$(document).ready(() => {
  //TODO: Do this dynamically
  var msDuration = $('html').css('--splash-screen-duration');

  $(document.body).css('overflow-y', 'hidden');

  setTimeout(() => {
    $(".splash-screen").remove();
    $(document.body).css('overflow-y', 'auto');

  }, msDuration);
});