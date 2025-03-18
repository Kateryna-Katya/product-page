import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', function () {
    const thumbsSwiper = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper('.gallery-main', {
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
});