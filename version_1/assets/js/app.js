const elems = document.querySelectorAll('.carousel');

window.addEventListener('DOMContentLoaded', function() {
    options = {}
    const instances = M.Carousel.init(elems, options);
    document.querySelector('.preloader').classList.add('active')
});
