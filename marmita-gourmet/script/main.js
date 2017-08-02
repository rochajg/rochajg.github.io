$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('#menu').height()
        }, 1200);
        return false;
      }
    }
  });
});

setInterval(function() {
  if (window.scrollY <= $("#menu").height())  {
    $('#topButton').css('opacity', '0');
    $('nav').css('background', 'rgba(255,255,255, 0.4)');
  } else { 
    $('#topButton').css('opacity', '1.0');
    $('nav').css('background', 'rgba(255,255,255, 0.95)');
  } 
}, 100);

$(document).ready(function(){
  $('.depoimentos').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    randomStart: true,
    auto: true,
    slideWidth: 550,
    slideMargin: 30
  });
});