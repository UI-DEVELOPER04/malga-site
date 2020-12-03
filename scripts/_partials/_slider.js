$(document).ready(function() {
    if($('.single-slider').length > 0)
    {
        $('.single-slider').owlCarousel({
            center: true,
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,        
        });
    }

    if($('.client-logo').length > 0)
    {
        $('.client-logo').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            margin:30,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2,                                
                },
                600:{
                    items:4,                
                },
                1000:{
                    items:6,                
                }            
            }
        }); 
    }

    
});
