// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"
let windowWidth = document.querySelector("body").offsetWidth
let containerWidth = document.querySelector("[class*=__container]").offsetWidth
//if (windowWidth > 767.98) {
//   let buttonBook = document.querySelector(".content-form__button");
//   let formContainer = document.querySelector(".content-form__container");
//   let formContainerPaddingTop = window.getComputedStyle(formContainer, null).paddingTop;
//   let formContainerPaddingBottom = window.getComputedStyle(formContainer, null).paddingBottom;
//   let formContainerHeight = formContainer.offsetHeight;
//   buttonBook.style.height = formContainerHeight + "px";
//   buttonBook.style.marginTop = "-" + formContainerPaddingTop;
//   buttonBook.style.marginBottom = "-" + formContainerPaddingBottom;
//} else {
//   NaN
//}
//if (windowWidth < 767.98) {
//   let buttonBook = document.querySelector(".content-form__button").innerHTML = "Book Now";
//}
//===================
