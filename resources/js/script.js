$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '53px;'
    });
});

/* Scroll on buttons - utilisation des deux boutons I'm Hungry et Show-me more*/
$('.js--scroll-to-plans').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
});

$('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
});


/*Navigation scroll - utilisation de la barre de menu top right*/
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/*Animations on scroll*/
$('.js--wp-1').waypoint(
    (direction) => {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%',
    });

$('.js--wp-2').waypoint(
    (direction) => {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
        offset: '50%',
    });

$('.js--wp-3').waypoint(
    (direction) => {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%',
    });

$('.js--wp-4').waypoint(
    (direction) => {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
        offset: '50%',
    });

$('.js--wp-5').waypoint(
    (direction) => {
        $('.js--wp-5').addClass('animate__animated animate__heartBeat');
    },
    {
        offset: '50%',
    });


/* Mobile Navigation */

$('.js--nav-icon').click(function () {
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.attr("name") == 'reorder-three-outline') {
        icon.attr("name", 'close-outline');
    } else {
        icon.attr("name", 'reorder-three-outline');
    }
});







