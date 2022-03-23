$(function(){

// ====preloader part+======//
 $(window).on("load",function(){
    $('.preloader').delay(1000).fadeOut(500)
 })




// ===========back to top================//


$(window).scroll(function(){
   var scrolling = $(this).scrollTop();

   if(scrolling > 50){
        $(".back_top i").fadeIn(800);
         }
         else{
            $(".back_top i").fadeOut(800);
         }
});



   $(".back_top i").click(function(){
      $('html, body').animate({
         scrollTop:0
      }, 2000)
   });
// -----------Lightbox-----------------//
   

lightbox.option({
      'resizeDuration': 100,
      'wrapAround': true,
      
 });
//  =============slide part===========//

$('.slide_items').slick({
   slidesToShow: 3,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed:500,
   arrows: false
 });
   
   });
 