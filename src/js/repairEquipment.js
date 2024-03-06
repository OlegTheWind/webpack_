const swiper = new Swiper('.swiper-container.swiper-container__technic', {
  breakpoints:{
    320:{
      enabled: true,
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

    },
    768:{
      enabled: false
    }

  },
  width: 224,


});
function reloadPage() {
    location.reload();
}

const mediaQuery320 = window.matchMedia("(max-width: 320px)");
const mediaQuery768 = window.matchMedia("(min-width: 321px) and (max-width: 768px)");
const mediaQuery1120 = window.matchMedia("(min-width: 769px) and (max-width: 1120px)");

mediaQuery320.addListener(reloadPage);
mediaQuery768.addListener(reloadPage);
mediaQuery1120.addListener(reloadPage);

document.addEventListener("DOMContentLoaded", function () {
    let tags = document.querySelectorAll(".text__technic");
    let numTagsToApplyClass = 4;

    if (window.innerWidth >= 1120) {
        for (let i = tags.length - numTagsToApplyClass; i < tags.length; i++) {
            tags[i].classList.add("extra");
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let tags = document.querySelectorAll(".text__technic");
    let numTagsToApplyClass = 5;

    if (window.innerWidth < 1119) {
        for (let i = tags.length - numTagsToApplyClass; i < tags.length; i++) {
            tags[i].classList.add("extra");
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".technic__button-flex");
    let slides = document.querySelectorAll(".text__technic.extra");
    let buttonText = button.querySelector(".technic__text-flex");

    button.addEventListener('click', function () {
        let numSlidesToToggle = 4;

        for (let i = 0; i < numSlidesToToggle; i++) {
            slides[i].classList.toggle("extra");
        }

        if (slides[0].classList.contains("extra")) {
            buttonText.textContent = "Показать";
        } else {
            buttonText.textContent = "Скрыть";
        }
    });

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleScreenChange(e) {
        if (e.matches) {
            numSlidesToToggle = 5;
        } else {
            numSlidesToToggle = 3;
        }
    }

    mediaQuery.addListener(handleScreenChange);
    handleScreenChange(mediaQuery);
});
let button = document.querySelector('.technic__button-flex');

button.addEventListener('click', function() {
    this.classList.toggle('rotated');
});



