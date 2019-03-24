
     $(document).ready(function(){
      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          // dots: true,
          infinite: true,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left'),
          nextArrow: $('.arrows__right'),
          responsive: [
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
          ]
        });

        //slider1
        $('.slider-for1').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav1'
        });
        $('.slider-nav1').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for1',
          // dots: true,
          infinite: true,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left1'),
          nextArrow: $('.arrows__right1'),
          responsive: [
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
          ]
        });

        //slider2
        $('.slider-for2').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav2'
        });
        $('.slider-nav2').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for2',
          // dots: true,
          infinite: true,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left2'),
          nextArrow: $('.arrows__right2'),
          responsive: [
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
          ]
        });

        //slider3

        $('.slider-for3').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav3'
        });
        $('.slider-nav3').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for3',
          // dots: true,
          infinite: true,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left3'),
          nextArrow: $('.arrows__right3'),
          responsive: [
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
          ]
        });

        //slider4
        $('.slider-for4').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav4'
        });
        $('.slider-nav4').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for4',
          // dots: true,
          infinite: true,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left4'),
          nextArrow: $('.arrows__right4'),
          responsive: [
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
          ]
        });

       //slider bath 
        $('.slider-for5').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav5'
        });
        $('.slider-nav5').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.slider-for5',
          infinite: true,
          focusOnSelect: true,
          prevArrow: $('.arrows__left5'),
          nextArrow: $('.arrows__right5'),
          responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                      }
            },
            {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,}
            },
            {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
        });


      });
 