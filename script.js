$(document).ready(function() {
   $('#test').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#test').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
});
