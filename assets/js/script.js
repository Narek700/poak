$(document).ready(function () {
    $('#headCarousel').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000,
        nextArrow: '<button class="btn-next icon-next"></button>',
        prevArrow: '<button class="btn-prev icon-prev"></button>',
    });

    $('#carouselImag').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000,
    });
});