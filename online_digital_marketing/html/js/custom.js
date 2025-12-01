// Owl Carousel
$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }

});
});
// JS for Hover Menu
$(document).ready(function() {
    $('ul.navbar-nav .nav-item.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
});
