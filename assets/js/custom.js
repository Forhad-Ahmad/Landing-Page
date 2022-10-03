$(function () {
    //**........init Isotope.........**//

    var $grid = $('.portfolio-item-details').isotope({
        // options
    });

    //**........filter items on button click.........**//

    $('.portfolio-item-menu').on('click', 'ul li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $(this).addClass('active').siblings().removeClass('active');
    });

    //**.......counter.........**//

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    //**.......back to top fadein / fadeout......... ** //


    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".top-switch").fadeIn();
        } else {
            $("top-switch").fadeOut();
        }
    });

    //**.......Smooth Scroll .........**//

    $(".top-switch").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
});
