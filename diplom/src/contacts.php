<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Контакты</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
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

  <section class="feedback">
  <div class="container">
    <div class="feedback-mail ">
      <h3 class="feedback-mail__title">Обратная связь</h3>
      <form action="feedback-mail__form" class="">
      <div class="feedback-mail__form-contact">
        <input type="text" class="feedback-mail__form-date" placeholder="Ваше имя..">
        <input type="email" class="feedback-mail__form-date" placeholder="Ваш e-mail..">
      </div>
      <input type="text" class="feedback-mail__form-message" placeholder="Ваше сообщение..">
      </form>
    </div>
    <div class="feedback-social">
    <h3 class="feedback-social__title">Мы в соцсетях</h3>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100001757257937" class="social facebook-bg">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a target="_blank" href="https://www.instagram.com/anzhelika_inta/" class="social instagram-bg">
         <i class="fab fa-google-plus-g"></i>
      </a>
      <a target="_blank" href="https://vk.com/id4914001" class="social vk-bg">
        <i class="fab fa-vk"></i>
      </a>
    </div>
    
  </div>
</section>

<?php include 'footer_pages.php' ?>
  
</body>
</html>