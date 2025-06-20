$(document).ready(function () {

    // Toggle navbar menu
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Header background on scroll
    function updateHeaderBackground() {
        if ($(window).scrollTop() > 35) {
            $('.header').css({
                'background': '#002e5f',
                'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
            });
        } else {
            $('.header').css({
                'background': '#002e5f',
                'box-shadow': 'none'
            });
        }
    }

    // Apply header style on page load and scroll
    updateHeaderBackground();
    $(window).on('scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        updateHeaderBackground();
    });

    // --- COUNTER ANIMATION (RESTORED & FIXED) ---
    // This uses the Waypoints library to trigger the animation when scrolled into view.
    var countersAnimated = false; // A flag to ensure it only runs once

    if ($('.counters').length) { // Check if the counters section exists
        $('.counters').waypoint(function() {
            if (!countersAnimated) { // Only run if it hasn't been animated yet
                $('.counter').each(function () {
                    var $this = $(this);
                    var target = parseInt($this.attr('data-target'));
                    $({ countNum: $this.text()}).animate({
                        countNum: target
                    }, {
                        duration: 2000, // Animation duration in milliseconds
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum.toLocaleString('en-US')); // Format with commas if needed
                        }
                    });
                });
                countersAnimated = true; // Set the flag to true
            }
        }, {
            offset: '85%' // Trigger when the section is 85% visible
        });
    }


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
        if (!$(this).next('.accordion-body').is(':visible')) {
            $('.accordion .accordion-body').slideUp(500);
            $('.accordion .accordion-header span').text('+');
        }
        $(this).next('.accordion-body').slideToggle(500);
        $(this).children('span').text(function(i, text){
            return text === '+' ? '-' : '+';
        });
    });

});