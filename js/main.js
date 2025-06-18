$(document).ready(function () {

    // Toggle navbar menu
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Initial header background and scroll behavior
    function updateHeaderBackground() {
        if ($(window).scrollTop() > 35) {
            $('.header').css({
                'background': '#002e5f',
                'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
            });
        } else {
            $('.header').css({
                'background': '#002e5f', // Previously was 'none'
                'box-shadow': 'none'
            });
        }
    }

    // Apply initial header style on page load
    updateHeaderBackground();

    // Apply header style on scroll
    $(window).on('scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        updateHeaderBackground();
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Owl Carousel initialization
    (function ($) {
        "use strict";

        $(".clients-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 2 },
                768: { items: 4 },
                900: { items: 6 }
            }
        });

        $(".testimonials-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 }
            }
        });

    })(jQuery);

    // Back-to-top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Accordion
    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(500);
        $(this).next('.accordion-body').slideDown(500);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

});
