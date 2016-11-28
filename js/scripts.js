$(document).ready(function(){
    $('#partners .items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow:'<a class="prev"></a>',
    nextArrow:'<a class="next"></a>',
    // centerMode: true,
    responsive: [
        {
        breakpoint: 1025,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            // centerMode: true,
            arrows: false
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    }); 
    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        // dots: true,
        // centerMode: true,
        focusOnSelect: true
    });
    $('.mmenu').on('click', function() {
        $('.hmenu').toggle();
    });
});