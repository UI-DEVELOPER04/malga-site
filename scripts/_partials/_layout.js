
// Sticky Header Script
/*$(window).scroll(function() {    
    if ($(this).scrollTop() > 10){  
        $('.siteHeader').addClass("sticky");
    }
    else{
        $('.siteHeader').removeClass("sticky");
    }
});*/

$(document).ready(function() {
    if($('.feature-slider').length > 0)
    {
      $('.feature-slider').owlCarousel({
        items:1,        
        loop:true,
        margin:0,         
        dots:false,
        nav:true,
        center:true,
        smartSpeed: 1000,
        responsiveClass:true,
        
        responsive:{
            580:{
                items:1
            },
            700:{
                items:2, 
                center:false,
            },
            1000:{
              items:3
          }
        }       
      });
    }    
});


























    







