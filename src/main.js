import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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

    // Продуктовий слайдер (1 слайд)
    new Swiper('.product-slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
        },
    });

    // 🔥 **Новий слайдер для відгуків (1 слайд, навігація)**
    new Swiper('.rewiew-slider', {
        modules: [Navigation],
        slidesPerView: 1, // Показуємо лише 1 слайд
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.custom-next-rewiew',
            prevEl: '.custom-prev-rewiew',
        },
    });
});
