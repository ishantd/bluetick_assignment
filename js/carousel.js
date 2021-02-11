$(document).ready(function(){
    $('.main-carousel').slick({
      autoplay: true,
      infinite: true,
      mobileFirst: true,
      pauseOnHover: true,
      useCSS: true,
    //   arrows: true, // Adds arrows to sides of slider
      dots: true // Adds the dots on the bottom
    });
  });