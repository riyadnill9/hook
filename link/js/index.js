$(document).ready(function () {
  $("#features").waypoint(function (direction) {
      if (direction == "down") {
          $("nav").addClass("sticky");
      } else {
          $("nav").removeClass("sticky");
      }
  });
});

const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });


// owl carousel js
$('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  mouseDrag: false,
  smartSpeed : 300,
  margin: 10,
  nav: false,
  responsive: {
      1200: {
          items: 4,
      },
      1024: {
        items: 3,
      },
      980: {
        items: 2 ,
      },
      768: {
        items: 2,
      },
      600: {
        items: 2 ,
      },
      300: {
        items: 1
      }
  }
})

// MIXITUP
var mixer = mixitup('.gallery-grid');
