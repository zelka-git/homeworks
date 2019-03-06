$(Document).ready(function(){
 var priceCard1 =  $('.price__card-1');
 var priceCard2 =  $('.price__card-2');
 var priceCard3 =  $('.price__card-3');
 var priceCard4 =  $('.price__card-4');
 var priceCard5 =  $('.price__card-5');
 var priceCard6 =  $('.price__card-6'); 
 var step =  $('.step');

 $(window).scroll(function(){
  if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
    priceCard1.addClass('animate-animateUp animate-rotateRight');
  }
  });

  $(window).scroll(function(){
    if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
      priceCard2.addClass('animate-animateUp');
  }
  });

  $(window).scroll(function(){
    if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
        priceCard3.addClass('animate-animateUp animate-rotateLeft');
    }
  });

  $(window).scroll(function(){
    if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
      priceCard4.addClass('animate-animateUp animate-rotateRight');
    }
    });
  
    $(window).scroll(function(){
      if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
        priceCard5.addClass('animate-animateUp');
    }
    });
  
    $(window).scroll(function(){
      if ( ($(this).scrollTop() + $(this).height() - 200) > priceCard1.offset().top ) {
          priceCard6.addClass('animate-animateUp animate-rotateLeft');
      }
    });

    $(window).scroll(function(){
      if ( ($(this).scrollTop() + $(this).height() - 50) > step.offset().top ) {
          step.addClass('animate-changeWidth');
      }
    });


});