$(document).ready(function() {
  $('.card .btn.arrow').click(function() {
      var popupId = $(this).closest('.card .btn.arrow').data('popup');
      $('#' + popupId).fadeIn();
  });
  $('.close-popup').click(function() {
      $(this).closest('.popup').fadeOut();
  });
  $('.popup').click(function(e) {
      if ($(e.target).closest('.popup-content').length == 0) {
          $(this).fadeOut();
      }
  });

  $('.partner .uslugi_inner .item').each(function(index) {
    const number = String(index + 1).padStart(2, '0'); // Форматируем число, чтобы оно было в формате 01, 02 и т.д.
    $(this).find('.uslugi_head p span:first-child').text(number); // Меняем текст в первом <span>
});



let touchStartX = 0;
let touchEndX = 0;

$(".burger").click(() => {
  $(".burger_popup").toggleClass("open");
});

// Отслеживаем начало касания
$(".burger_popup").on("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

// Отслеживаем окончание касания
$(".burger_popup").on("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  // Если свайп идет слева направо (от меньшего к большему значению координат X), закрываем меню
  if (touchEndX > touchStartX) {
    $(".burger_popup").removeClass("open");
  }
}

});



function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();