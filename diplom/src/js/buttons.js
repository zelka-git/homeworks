// $('#page-rooms').on('click', function() { window.location = 'rooms.php'; });

var buttonRooms = document.querySelector('#page-rooms');
buttonRooms.addEventListener('click', function(){
  location.href = 'rooms.php';
});

var buttonBath = document.querySelector('#page-bath');
buttonBath.addEventListener('click', function(){
  location.href = 'bathhouses.php';
});

var buttonAttr = document.querySelector('#page-attr');
buttonAttr.addEventListener('click', function(){
  location.href = 'attractions.php';
});



