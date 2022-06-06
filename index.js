$(window).load(function() {
  var msDuration = $('html').css('--splash-screen-duration').slice(0,5);
  
  $(".splash-screen").delay(msDuration).queue(function() {
    $(this).remove();
    // $('.hide').removeClass();
  });
  
  $("#navbar").css("top", "0");
})