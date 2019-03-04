$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.center').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    prevArrow: $('.arrows__left-center'),
    nextArrow: $('.arrows__right-center'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false
  });

  $('.add-remove').slick({
    slidesToShow: 3,
    slidesToScroll: 3
 
  });
  var slideIndex = 6;
  $('.js-add-slide').on('click', function() {
    slideIndex++;
    if (slideIndex > 6){
      slideIndex=6;
    }else{
      if( slideIndex==1 || slideIndex==4){
        $('.add-remove').slick('slickAdd', '<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-1.jpg" alt=""></div>');
      }
      if (slideIndex==2 || slideIndex==5){
        $('.add-remove').slick('slickAdd', '<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-2.jpg" alt=""></div>');
      }
      if (slideIndex==3 || slideIndex==6){
        $('.add-remove').slick('slickAdd', '<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-3.jpg" alt=""></div>');
  
      }
      }
    });
  
  $('.js-remove-slide').on('click', function() {
    $('.add-remove').slick('slickRemove',slideIndex - 1);
    if (slideIndex !== 0){
      slideIndex--;
    }
  });

});