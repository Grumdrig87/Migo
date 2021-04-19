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
  $('[data-aren]').click(function() {
    $(this).parent().find('[data-aren]').removeClass('active');
    $(this).addClass('active')
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

var helpers = {
	addZeros: function (n) {
		return (n < 10) ? n : '' + n;
	}
};

function sliderInit() {
  var $slider = $('[data-zayavka]');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      prevArrow: '.arenda__arrow-l',
      nextArrow: '.arenda__arrow-r',
      // responsive: [
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       adaptiveHeight: true
      //     }
      //   }
      // ]
    });

    if ($(this).find('[data-card]').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  });
  
  $('.arenda__arrow-r').on('click', function () {
    $('[data-zayavka]').slick('slickGoTo', 5);
});
};
sliderInit();
  
});