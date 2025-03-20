import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
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
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
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
        modules: [Navigation, Pagination], 
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.custom-next-rewiew',
            prevEl: '.custom-prev-rewiew',
        },
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
});


// accordion////////
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-acc', {
    duration: 500,
    showMultiple: true,
    collapse: true,
    elementClass: 'faq-acc-el',
    triggerClass: 'faq-acc-el-trigger',
    panelClass: 'faq-acc-el-descr-frame',
    openOnInit: [-1],
});

document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');


        if (parentElement.classList.contains('open')) {
            parentElement.classList.remove('open');
        } else {
            document.querySelectorAll('.faq-acc-el').forEach(el => el.classList.remove('open')); // Закриваємо інші
            parentElement.classList.add('open');
        }
    });
});