    // Создание карты
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    var myMap;
    var Map =  $('#map');

    function showMap(){
        if( !myMap )
        {
            myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.61157910, 37.18418167],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 13
            },
            {
                searchControlProvider: 'yandex#search'
            }),
        
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
        
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/Map-icon.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0]
            });
              myMap.geoObjects
              .add(myPlacemark);
        }
       
    }

    // При разрешении больше 768 карта грузится автоматически, иначе при появлении области
function init () {
  if ( $(window).width() > 768 )
  {
    showMap();  
  }  else{
    $(window).scroll(function() {
        if( ($(this).scrollTop() + $(this).height() ) > Map.offset().top ) {  
            showMap();
        } 
    });
  }
}
