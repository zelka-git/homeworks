$(Document).ready(function(){
  $(function() {
    var owl = $(".owl-carousel").owlCarousel({
      nav:false,
      margin:10,
      loop:true,
      responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        768 : {
            items:2
        },
        // breakpoint from 768 up
        1200 : {
            items:3
        }
    }
    });
    $('.arrows__right').click(function(){
      owl.trigger('next.owl.carousel');
    });
    $('.arrows__left').click(function(){
      owl.trigger('prev.owl.carousel', [300]);
    });

  });
});
