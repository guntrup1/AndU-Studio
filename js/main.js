let videoPlayer = document.querySelector('.video-popup__player');

$('.who-are__inner-back-link').click(function (event) {
  $('.video-popup').toggleClass('active');
  $('body').toggleClass('lock');

  $('.video-popup__wrapper-inner__close, .video-popup__wrapper-back').click(function () {
    $('.video-popup').removeClass('active');
    $('body').removeClass('lock');
    videoPlayer.pause();
  });
});
