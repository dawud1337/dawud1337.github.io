$(document).ready(function(){

$('.single-slide').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

});
$(document).ready(function(){
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
      }
    return false; // выключаем стандартное действие
  });
});


$(document).ready(function(){
  $('#nash').on('click',function(){
    $('.vish').addClass('hide');
    $('.nash').removeClass('hide');

  });
});
$(document).ready(function(){
$('#vish').on('click',function(){
  $('.nash').addClass('hide');
  $('.vish').removeClass('hide');
  });
});