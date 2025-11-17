

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    center: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });