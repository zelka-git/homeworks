  $(document).ready(function(){
    // Валидация формы bath
  $('#bath-form').validate({
    errorElement: "div",
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
        email: "Формат: name@domain.com"
      }, 
      phone:{
        required: "Укажите телефон",
        minlength: "Укажите телефон"
      }
    }
  });
  // Маска для телефона
  $('.phone').mask('8 (999) 999-99-99')

// Валидация формы cfeedback
$('#feedback__form').validate({
  errorElement: "div",
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    email:{
      required: true,
      email: true
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
      email: "Формат: name@domain.com"
    }
  }
});

// Валидация формы modal
$('#modal-form').validate({
  errorElement: "div",
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
      email: "Формат: name@domain.com"
    }, 
    phone:{
      required: "Укажите телефон",
      minlength: "Укажите телефон"
    }
  }
});


  });
  
  
  