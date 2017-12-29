(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.homepage-slides').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    	$('.logo-carousel').owlCarousel({
    	    loop:true,
            margin: 30,
    	    nav:false,
            dots:true,
    	    autoplay:true,
    	    smartSpeed:1000,
    	    responsive:{
    	        0:{
    	            items:1
    	        },
    	        600:{
    	            items:5
    	        },
    	        1000:{
    	            items:5
    	        }
    	    }
    	})
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));