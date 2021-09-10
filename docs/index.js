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
    delay: 2500,
    disableOnInteraction: false,
  },
});

gsap.to('.bn_2_1_1', {
  x:200,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_2_1_1',
    markers:false,
    start:'0% 100%',
    end:'100% 0',
  },
});