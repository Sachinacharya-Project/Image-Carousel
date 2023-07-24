const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    mousewheel: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    keyboard: {
        enabled: true,
    },
});
