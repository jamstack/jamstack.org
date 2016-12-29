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