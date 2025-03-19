import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
 

document.addEventListener('DOMContentLoaded', function () {
    let logosSwiper;

    // Ініціалізація logosSwiper
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

    // Ініціалізація thumbsSwiper (галерея)
    const thumbsSwiper = new Swiper('.gallery-thumbs', {
        modules: [Navigation, Thumbs],
        spaceBetween: 10,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        freeMode: true,
    });

    // Ініціалізація gallery-slider (головна галерея)
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

    // ✅ Додаємо новий product-slider (продуктовий слайдер)
    new Swiper('.product-slider', {
        modules: [Navigation],
        // slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
        },
    });
});