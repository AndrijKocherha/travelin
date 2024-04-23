/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, EffectFade, FreeMode } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   //==========
   if (document.querySelector('.main-block__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.main-block__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Autoplay, Pagination, EffectFade],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
         speed: 2500,

         touchRatio: 0,
         //simulateTouch: false,
         loop: false,
         //preloadImages: false,
         //lazy: true,


         // Ефекти
         //autoplay: true,
         effect: 'fade',
         fadeEffect: {
            crossFade: true,

         },
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },


         // Пагінація

         pagination: {
            el: '.main-block__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.main-block__arr-top',
            nextEl: '.main-block__arr-bottom',
         },
         /*
         // Брейкпоінти
         breakpoints: {
            640: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1268: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
         },
         */
         // Події
         on: {

         }
      });
   }

   //===================================

   if (document.querySelector('.popular-destination__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.popular-destination__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, FreeMode],
         observer: true,
         observeParents: true,
         spaceBetween: 20,
         slidesPerView: "auto",
         autoHeight: true,
         speed: 800,
         slideToClickedSlide: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         freeMode: true,
         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.head-block__button-left_destination',
            nextEl: '.head-block__button-right_destination',
         },

         // Брейкпоінти
         breakpoints: {
            320: {
               spaceBetween: 20,
               slidesPerView: 1,
               freeMode: false,
            },
            768: {
               spaceBetween: 32,
               slidesPerView: "auto",
               freeMode: true,
            },
            992: {
            },
            1268: {

            },
         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.offer__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.offer__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation],
         observer: true,
         slidesPerView: 3,
         observeParents: true,
         spaceBetween: 32,
         autoHeight: false,
         speed: 1000,
         slidesPerGroup: 3,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.head-block__button-left_offer',
            nextEl: '.head-block__button-right_offer',
         },

         // Брейкпоінти
         breakpoints: {
            320: {
               autoHeight: true,
               speed: 700,
               slidesPerGroup: 1,
               spaceBetween: 20,
               slidesPerView: 1,
            },
            //768: {
            //   speed: 700,
            //   slidesPerGroup: 1,
            //   spaceBetween: 20,
            //   slidesPerView: 1,
            //},
            992: {
               autoHeight: false,
               speed: 1000,
               spaceBetween: 32,
               slidesPerView: 3,
               slidesPerGroup: 3,
            },
            1268: {

            },
         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.planners__swiper') && window.innerWidth >= 992) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.planners__swiper', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, FreeMode],
         observer: true,
         observeParents: true,
         slidesPerView: "auto",
         spaceBetween: 32,
         autoHeight: false,
         speed: 800,
         slideToClickedSlide: true,
         freeMode: true,
         touchRatio: 1,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         //navigation: {
         //   prevEl: '.swiper-button-prev',
         //   nextEl: '.swiper-button-next',
         //},

         // Брейкпоінти
         breakpoints: {
            320: {
               touchRatio: 0,
               slidesPerView: 4,
               spaceBetween: 32,
               autoHeight: true,
               freeMode: false,
               direction: 'vertical',
            },
            768: {
               touchRatio: 1,
               freeMode: true,
               slidesPerView: "auto",
               spaceBetween: 32,
            },
            992: {
               //slidesPerView: 3,
               //spaceBetween: 20,
            },

         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.galery__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.galery__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation,],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 32,
         autoHeight: false,
         speed: 800,
         direction: "horizontal",
         slidesPerGroup: 1,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.head-block__button-left_galery',
            nextEl: '.head-block__button-right_galery',
         },

         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            768: {

               //slidesPerView: 4,
               //slidesPerColumn: 1,
               slidesPerView: 4,
            },
            992: {

            },
            1268: {

            },
         },

         // Події
         on: {

         }
      });
   }



   if (document.querySelector('.experiences__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.experiences__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, FreeMode],
         observer: true,
         observeParents: true,
         slidesPerView: "auto",
         spaceBetween: 32,
         autoHeight: false,
         speed: 800,
         slideToClickedSlide: true,
         freeMode: true,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.experiences__button_left',
            nextEl: '.experiences__button_right',
         },

         // Брейкпоінти
         breakpoints: {
            320: {
               spaceBetween: 32,
               autoHeight: true,
               freeMode: false,
               slidesPerView: 1,
            },
            478: {
               freeMode: true,
               slidesPerView: "auto",
               spaceBetween: 32,
            },
            992: {
               //slidesPerView: 3,
               //spaceBetween: 20,
            },

         },

         // Події
         on: {

         }
      });
   }


}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            autoplay: true,

            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск ініціалізації слайдерів
   initSliders();
   // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
   //initSlidersScroll();
});