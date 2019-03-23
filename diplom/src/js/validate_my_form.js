  $(document).ready(function(){
    // Валидация формы brif
  $('#bath-form').validate({
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
  });
  
  
  