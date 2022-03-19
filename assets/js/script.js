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

    $('.second-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('#third').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    //tablet-mobile language change
    $('#btnChange').on('click', function () {
        $('#languageMenu').toggleClass('active');
        $('body').toggleClass('overflow-hidden')
    });

    //menu toggle for mobile-tablet
    $('#btnMenu').on('click', function () {
        $(this).toggleClass('active');
        $('#nav').toggleClass('active')
    })

    //menu links click for mobile-tablet
    $('#nav a').on('click', function (e) {
        e.preventDefault();
    });
});