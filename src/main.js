import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css';

 

document.addEventListener('DOMContentLoaded', function () {
    let logosSwiper;


    function initLogosSwiper() {
        const logosSlider = document.querySelector('.logos-slider');

        if (window.innerWidth < 1440) {
            logosSlider.style.display = 'block';

            if (!logosSwiper) {
                logosSwiper = new Swiper('.logos-slider', {
                    modules: [Pagination],
                    slidesPerView: 3,
                    spaceBetween: 0,
                    loop: true,
                    pagination: {
                        el: '.custom-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<div class="${className} pagination-item"></div>`;
                        },
                    },
                    on: {
                        slideChange: function () {
                            const activeIndex = this.realIndex;
                            const items = document.querySelectorAll('.pagination-item');

                            items.forEach((item, index) => {
                                item.classList.toggle('active', index === activeIndex);
                            });
                        },
                    },
                });
            }
        } else {
            logosSlider.style.display = 'none';

            if (logosSwiper) {
                logosSwiper.destroy(true, true);
                logosSwiper = null;
            }
        }
    }

    initLogosSwiper();
    window.addEventListener('resize', initLogosSwiper);


    const thumbsSwiper = new Swiper('.gallery-thumbs', {
        modules: [Navigation, Thumbs],
        spaceBetween: 10,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        freeMode: true,
    });

    new Swiper('.gallery-slider', {
        modules: [Navigation, Thumbs],
        loop: true,
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
    });


    new Swiper('.product-slider', {
        modules: [Navigation],
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
        },
    });
    new Swiper('.rewiew-slider', {
        modules: [Navigation, Pagination], // Додаємо модуль Pagination
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.custom-next-rewiew',
            prevEl: '.custom-prev-rewiew',
        },
        pagination: { // Винесено за межі navigation
            el: '.custom-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<div class="${className} pagination-item"></div>`;
            },
        },
        on: {
            slideChange: function () {
                const activeIndex = this.realIndex; // Отримуємо активний слайд
                const items = document.querySelectorAll('.pagination-item');
                items.forEach((item, index) => {
                    item.classList.toggle('active', index === activeIndex);
                });
            },
        },
    });
});