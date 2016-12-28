// Sticky Nav Functionality

$(window).on('scroll', function(){

  var currentWindowPos = $(window).scrollTop();

  if (currentWindowPos > 0) {
    $("#header").addClass('scrolled');
  } else {
    $("#header").removeClass('scrolled');
  }
});