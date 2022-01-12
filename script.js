$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    rtl: false,
    loop: true,
    // margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items: 3
        }
    }
})