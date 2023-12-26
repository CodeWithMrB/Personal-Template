var swiper = new Swiper(".swiper-book", {
    effect: "coverflow",
    centeredSlides: true,
    speed: 1000,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});