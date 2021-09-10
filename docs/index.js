// 스크롤
$('body').niceScroll({
  scrollspeed: 10,
  cursorcolor : "#424242;"
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
