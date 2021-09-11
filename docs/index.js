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

gsap.to('.bn_8_1_3', {
  x:-230,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_8_1_3',
    markers:false,
    start:'50% 100%',
    end:'100% 0',
  },
});

gsap.to('.bn_9_1_3', {
  x:-230,
  opacity:1,
  duration:2,
  scrollTrigger:{
    trigger:'.bn_9_1_3',
    markers:false,
    start:'50% 100%',
    end:'100% 0',
  },
});
