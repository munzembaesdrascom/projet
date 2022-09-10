( function($) {    

    "use strict";

    /*--------------------------------------------------------------
    Featured Content
    --------------------------------------------------------------*/
    
    var rtl = localize.rtl ? true : false;   
    $('.feat-img .owl-carousel').owlCarousel({
        loop: true,
        rtl: rtl,
        responsive:{
            0:{
                items:1                
            },
            600:{
                items:2                
            },
            1000:{
                items:3               
            }
        }
    });   
    
    $('.feat-block .owl-carousel').owlCarousel({
        loop: true,
        rtl: rtl,
        responsive:{
            0:{
                items:1                
            },
            600:{
                items:3                
            },
            1000:{
                items:5               
            }
        }
    });

} ) ( jQuery );    