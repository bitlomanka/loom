
$(document).ready(function(){
    
    $('.slider_bg').find('.owl-carousel').owlCarousel({
        items:1,
        singleItem:true,
        itemsTabletSmall:false,
        navigation: true,
        navigationText: false,
        slideSpeed: 400,
        autoPlay: 4000
    });

    $(".owl-carousel").owlCarousel({
        items:1,
        singleItem:true,
        itemsTabletSmall:false,
        navigation: true,
        navigationText: false,
        slideSpeed: 400
    });
    
    
    $('.img-holder').imageScroll({
        holderMinHeight: 405,
        holderMaxHeight: 405,
        speed: 0.3
    });
    
    
});






