// mobile menu

$(function(){
  $('#menu').slicknav({
    brand: '<a class="mobile-logo" href="/"><img src="/img/jamstack-full-logo.svg"/></a>',
    label: '',
    appendTo: 'header'
  });
});


// Sticky Nav Functionality in Vanilla JS

var header = document.getElementById("header");

window.onscroll = function() {
  var currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop;

  header.classList.toggle('scrolled', currentWindowPos > 0);
};


// scrolling for anchor links

$(document).ready(function(){
  $(".scrolling-link").click(function(e) {
    e.preventDefault();

    anchorScroll( $(this), $($(this).attr("href")), 1000 );
  });
});

function anchorScroll(this_obj, that_obj, base_speed) {
  var this_offset = this_obj.offset();
  var that_offset = that_obj.offset();
  var offset_diff = Math.abs(that_offset.top - this_offset.top);
  var speed       = 1000;

  $("html,body").animate({
    scrollTop: Math.abs(that_offset.top - 125)
  }, speed);
}