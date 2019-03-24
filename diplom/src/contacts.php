<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Контакты</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">


  

  <link rel="canonical" href="http://www.example.com" />
</head>
<body>
<?php include 'header_pages.php' ?>

<section class="contacts">
  <div class="container">
    <div class="contacts__title">Контакты</div>
    <p class="contacts__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>  
  </div>
</section>

<section class="block-map">
<div class="container">
<div class="card">
  <div class="card-text">
  <span class="card__title">Россия, Крым, г. Балаклава “Гостевой дом с орлами”</span>
  <ul class="card__info">
    <li class="card__info-item">
      <img src="img/cantacts/clock.png" alt="">
      <span>Пн.-СБ.: 09:00–18:00</span></li>
    <li class="card__info-item">
      <img src="img/cantacts/email.png" alt="">
      <a href="mailto:info@rus-sauna.com">info@rus-sauna.com </a>
    </li>
    <li class="card__info-item">
      <img src="img/cantacts/phone.png" alt="">
      <a href="tel:80765767667">8 (0765) 76 76 67</a>
    </li>
  </ul>
  </div>
  <div class="card-image">
    <img src="img/cantacts/image.jpg" alt="">
  </div>
</div>
</div>



  <div calss="map" id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19142.040885742408!2d33.
    5856154892436!3d44.50529204242054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
    1s0x40952051d6111b5f%3A0xe1f2a28323b0f312!2zNi04INGD0LsuINCa0YDQtdGB0YLQvtCy0YHQutC-
    0LPQviwg0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjA!5e0!3m2!1sru!2sru!4v1553356779125"
    width="1920px" height="600px" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>

</section>


  <section class="feedback">
  <div class="container">
    <div class="feedback-block">
    <div class="feedback-mail ">
      <h3 class="feedback-mail__title">Обратная связь</h3>
      <form action="mail.php" metod="POST" class="feedback-mail__form" id="feedback__form"> 
      <div class="feedback-mail__form-contact">
        <div class="feedback-form__input">
          <input type="text" name="username" class="feedback-mail__form-date name" placeholder="Ваше имя..">
        </div>
        <div class="feedback-form__input">
          <input type="email" name="email" class="feedback-mail__form-date email" placeholder="Ваш e-mail..">  
        </div>   
      </div>
      <input type="text" name="message" class="feedback-mail__form-message pen" placeholder="Ваше сообщение..">
      <div class="g-recaptcha" data-sitekey="6LeAjJkUAAAAAAhOrKtx2LrJG-Jz9IOjagPTjVc4"></div>
      <button type="submit" class="feedback-mail__form-button button">Отправить</button> 
      </form>
    </div>
    <div class="feedback-social">
    <h3 class="feedback-social__title">Мы в соцсетях</h3>
      <div class="feedback-social__block">
        <a target="_blank" href="https://vk.com" class="social vk-bg">
          <i class="fab fa-vk social-log"></i>
          <span class="social-text">вконтакте</span>
        </a>
        <a target="_blank" href="https://www.facebook.com/" class="social facebook-bg">
          <i class="fab fa-facebook-f social-log"></i>
          <span class="social-text">facebook</span> 
        </a>
        <a target="_blank" href="https://www./" class="social instagram-bg">
          <i class="fab fa-google-plus-g social-log"></i>
          <span class="social-text">google+</span>
        </a>


      </div>


    </div>
    </div>
    
  </div>
</section>

<!-- для google + -->
<!-- <script src="https://apis.google.com/js/platform.js" async defer></script>
<g:plusone></g:plusone> -->
<!-- <div class="g-plusone" data-size="tall">GOOGLE</div> -->
<script></script>
<?php include 'footer_pages.php' ?>
  
<?php 
      foreach ($_POST as $key => $value) {
        echo '<p><strong>' . $key.':</strong> '.$value.'</p>';
      }
    ?>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.maskedinput.min.js"></script>
<script src="js/validate_my_form.js"></script>
<script src='https://www.google.com/recaptcha/api.js?hl=ru'></script>

</body>
</html>