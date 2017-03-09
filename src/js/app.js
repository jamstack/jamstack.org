// mobile menu

$(function(){
  $('#menu').slicknav({
    brand: '<a class="mobile-logo" href="/"><img src="/img/jamstack-full-logo.svg"/></a>',
    label: '',
    appendTo: 'header'
  });
});


// Sticky Nav Functionality in Vanilla JS

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

var header = document.getElementById("header");

window.onscroll = function() {

  var currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentWindowPos > 0) {
    addClass(header, 'scrolled');
  } else {
    removeClass(header, 'scrolled');
  }
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