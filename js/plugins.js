/*global $,jQuery,alert*/
$(document).ready(function (){
  "use strict";

  //Nice Scroll
  $("html").niceScroll();

    $('.carousel').carousel({
       interval:6000
    });
    //Show Color option Div When Click on the Gear
    $(".gear-check").click(function ()
    {
      $(".color-option").fadeToggle();
    });
    //Change Theme Color On Click
    var colorLi = $(".color-option ul li"); //cashing

    colorLi
    .eq(0).css("backgroundColor", "#E41B17").end()
    .eq(1).css("backgroundColor", "#E426D5").end()
    .eq(2).css("backgroundColor", "#009AFF").end()
    .eq(3).css("backgroundColor", "#FFD500");
     
    colorLi.click(function () {

      $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      //console.log( $(this).attr("data-value"))

    });
    //cashing the scrollTop Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
   
        if($(this).scrollTop() >= 700 ) {
          scrollButton.show();
        } else {
          scrollButton.hide();
        }
  });
  //Click on Button TO Scroll Top
  scrollButton.click(function ()
  {
    $("html,body").animate({scrollTop: 0},600);

 });

    
});
//Loading Screen
$(window).load(function () {
   "use strict"
  //  Loading Elements 
$(".loading-overlay .spinner").fadeOut(2000, function () {
        //Show Scroll
       $("body").css("overflow", "auto");
       $(this).parent().fadeOut(2000, function () {
         
        $(this).remove();

      });

  });

});