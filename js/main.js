jQuery(document).ready(function($) {

  //tabs
//   $('[data-can]').on('click', function() {
//       $(this).addClass('active').siblings().removeClass('active').closest('.can__wrap').find('ul.can__list').removeClass('active').eq($(this).index()).addClass('active');
//   });

  //slider
  if (jQuery('[data-unic]').length > 0) {
      $('[data-unic]').slick({
          dots: false,
          arrows: false,
          speed: 300,
          slidesToShow: 5,
          infinite: true,
          centerMode: true,
          variableWidth: true
          // responsive: [{
          //     breakpoint: 768,
          //     settings: {
          //         slidesToShow: 1
          //     }
          // }, ]
      });
  }
  
  $('[data-izb]').click(function() {
    $(this).toggleClass('active')
  })
  // faq
//   if (jQuery('[data-faq]').length > 0) {
//       $('[data-faq]').click(function() {
//           $(this).find('.faq__title').toggleClass('open');
//           $(this).find('p').slideToggle(300);
//       })
//   }
  // burger
//   $('[data-burger]').click(function() {
//       $('html').toggleClass("open");
//       $(this).toggleClass("open");
//       $('[data-nav]').toggleClass("open");
//       $('body').toggleClass('open');
//   });
  
});