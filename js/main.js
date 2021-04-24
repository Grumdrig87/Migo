jQuery(document).ready(function($) {


  //adaptive
  
  if ($(window).width() < 994) {
    $('.arenda-btn').text('Перейти в раздел');
  }
  if ($(window).width() < 994) {
    $('[data-adress]').appendTo('[data-main]');
    $('[data-nav]').appendTo('.header__top');
    $('[data-login]').appendTo('[data-nav]');
    $('[data-ltop]').after('<div class="arenda__arrows"><div class="arenda__arrow arenda__arrow-l" data-lastprev><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"  width="10" height="17" fill="none"><path d="M.401 7.839c-.316.315-.316.842 0 1.158l7.286 7.291a.82.82 0 0 0 1.158 0 .82.82 0 0 0 0-1.157L2.138 8.417l6.708-6.712a.82.82 0 0 0 0-1.158.82.82 0 0 0-1.158 0L.401 7.839z" fill="#0e8cfe"/></svg></div><div class="arenda__arrow arenda__arrow-r" data-lastnext><svg xmlns="http://www.w3.org/2000/svg" width="10"  viewBox="0 0 10 17"  height="17" fill="none"><path d="M9.349 7.545a.83.83 0 0 1 0 1.16L2.063 16.01a.82.82 0 0 1-1.158 0 .82.82 0 0 1 0-1.159l6.707-6.726L.904 1.4a.82.82 0 0 1 0-1.16.82.82 0 0 1 1.158 0l7.287 7.306z" fill="#0e8cfe"/></svg></div></div>');
    $('[data-uniqtop]').after('<div class="arenda__arrows"><div class="arenda__arrow arenda__arrow-l" data-uniqprev><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"  width="10" height="17" fill="none"><path d="M.401 7.839c-.316.315-.316.842 0 1.158l7.286 7.291a.82.82 0 0 0 1.158 0 .82.82 0 0 0 0-1.157L2.138 8.417l6.708-6.712a.82.82 0 0 0 0-1.158.82.82 0 0 0-1.158 0L.401 7.839z" fill="#0e8cfe"/></svg></div><div class="arenda__arrow arenda__arrow-r" data-uniqnext><svg xmlns="http://www.w3.org/2000/svg" width="10"  viewBox="0 0 10 17"  height="17" fill="none"><path d="M9.349 7.545a.83.83 0 0 1 0 1.16L2.063 16.01a.82.82 0 0 1-1.158 0 .82.82 0 0 1 0-1.159l6.707-6.726L.904 1.4a.82.82 0 0 1 0-1.16.82.82 0 0 1 1.158 0l7.287 7.306z" fill="#0e8cfe"/></svg></div></div>');
    $('[data-saltop]').after('<div class="arenda__arrows"><div class="arenda__arrow arenda__arrow-l" data-salprev><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"  width="10" height="17" fill="none"><path d="M.401 7.839c-.316.315-.316.842 0 1.158l7.286 7.291a.82.82 0 0 0 1.158 0 .82.82 0 0 0 0-1.157L2.138 8.417l6.708-6.712a.82.82 0 0 0 0-1.158.82.82 0 0 0-1.158 0L.401 7.839z" fill="#0e8cfe"/></svg></div><div class="arenda__arrow arenda__arrow-r" data-salnext><svg xmlns="http://www.w3.org/2000/svg" width="10"  viewBox="0 0 10 17"  height="17" fill="none"><path d="M9.349 7.545a.83.83 0 0 1 0 1.16L2.063 16.01a.82.82 0 0 1-1.158 0 .82.82 0 0 1 0-1.159l6.707-6.726L.904 1.4a.82.82 0 0 1 0-1.16.82.82 0 0 1 1.158 0l7.287 7.306z" fill="#0e8cfe"/></svg></div></div>');
    if (jQuery('[data-last]').length > 0) {
      $('[data-last]').slick({
          dots: false,
          speed: 300,
          slidesToShow: 1,
          infinite: true,
          prevArrow: '[data-lastprev]',
          nextArrow: '[data-lastnext]',
          variableWidth: true
      });
  }
  if (jQuery('[data-salon]').length > 0) {
    $('[data-salon]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        infinite: false,
        prevArrow: '[data-salprev]',
        nextArrow: '[data-salnext]',
        variableWidth: true
    });
}
  }
  //slider
  if (jQuery('[data-unic]').length > 0) {
      $('[data-unic]').slick({
          dots: false,
          arrows: false,
          speed: 300,
          slidesToShow: 5,
          infinite: true,
          centerMode: true,
          variableWidth: true,
          responsive: [{
              breakpoint: 994,
              settings: {
                centerMode: false,
                arrows: true,
                prevArrow: '[data-uniqprev]',
                nextArrow: '[data-uniqnext]',
              }
          }, ]
      });
  }
  if (jQuery('[data-review]').length > 0) {
    $('[data-review]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        prevArrow: '[data-revprev]',
        nextArrow: '[data-revnext]',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },{
          breakpoint: 994,
          settings: {
              slidesToShow: 2
          }
      },{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            variableWidth: true,
        }
    } ]
    });
}
if (jQuery('[data-know]').length > 0) {
  $('[data-know]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
      prevArrow: '[data-knowprev]',
      nextArrow: '[data-knownext]',
      responsive: [{
          breakpoint: 1200,
          settings: {
              slidesToShow: 3
          }
      },{
        breakpoint: 993,
        settings: {
            slidesToShow: 2
        }
    },{
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
          variableWidth: true,
      }
  } ]
  });
}
  $('[data-izb]').click(function() {
    $(this).toggleClass('active')
  })
  $('[data-aren]').click(function() {
    $(this).parent().find('[data-aren]').removeClass('active');
    $(this).addClass('active')
  })
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });

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
      infinite: true,
      prevArrow: '[data-arprev]',
      nextArrow: '[data-arnext]',
      responsive: [
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
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
  
  $('[data-arnext]').on('click', function () {
    $('[data-zayavka]').slick('slickGoTo', 5);
});
};
sliderInit();
  
});