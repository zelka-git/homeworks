var button = document.querySelectorAll('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')

var i;
for (i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    modal.classList.add('modal_active')
  });
}
// button[this].addEventListener('click', function(){

//   modal.classList.add('modal_active')
// });

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});