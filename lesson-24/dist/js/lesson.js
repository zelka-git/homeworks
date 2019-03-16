
      
$(Document).ready(function(){  
  //валидация формы offer
  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email:{
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      }
    },
    messages:{
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("Не больше {0} символов")
      }, 
      phone:{
        required: "Укажите телефон",
        minlength: "Укажите телефон"
      }
    }
  });
  // // Маска для телефона
  // $('.phone').mask('8 (999) 999-99-99')

  // Валидация формы brif
  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email:{
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
        // maxlength: 10
      }
    },
    messages:{
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("Не больше {0} символов")
      },
      email:{
        required: "Нам нужен ваш email",
        email: "Ваш email должен быть в формате name@domain.com"
      }, 
      phone:{
        required: "Укажите телефон",
        minlength: "Укажите телефон"
      }
    }
  });
  // Маска для телефона
  $('.phone').mask('8 (999) 999-99-99')
  // Скрипт слайдера
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
});