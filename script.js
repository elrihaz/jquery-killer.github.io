$(document).ready(function () {
  $('.cube').mouseenter(function () {
    $(this).animate({
      height: '+=10px'
    });
  });
  $('.cube').mouseleave(function () {
    $(this).animate({
      height: '-=10px'
    });
  });
  $('.cube').click(function () {
    $(this).toggle(1000);
  });
});
