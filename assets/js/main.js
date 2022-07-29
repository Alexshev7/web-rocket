// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const logoHeader = document.querySelector('.header__logo');
const underLay = document.querySelector('.underlay__menu');

if (iconMenu) {
     // событие клик по иконке
     iconMenu.addEventListener("click", function (e) {
          document.body.classList.toggle('_lock');
          iconMenu.classList.toggle('_active');
          menuBody.classList.toggle('_active');
          underLay.classList.toggle('_active');
          logoHeader.classList.toggle('_hide');
     });
}

// Закрываю меню после нажатия на ссылку
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
     menuLinks.forEach(menuLink => {
          menuLink.addEventListener("click", onMenuLinkClick);
     });

     function onMenuLinkClick(e) {
          const menuLink = e.target;
          if (iconMenu.classList.contains('_active')) {
               document.body.classList.remove('_lock');
               iconMenu.classList.remove('_active');
               menuBody.classList.remove('_active');
               underLay.classList.remove('_active');
               logoHeader.classList.remove('_hide');
          }
     }
}

// Закрываю меню после нажатия в не области меню
window.addEventListener('click', e => {
     // находим элемент, на котором был клик
     const target = e.target
     // если этот элемент или его родительские элементы не окно навигации и не кнопка
     if (!target.closest('.menu__body') && !target.closest('.menu__icon')) {
          document.body.classList.remove('_lock');
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
          underLay.classList.remove('_active');
          logoHeader.classList.remove('_hide');
     }
})

//  Табы
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

// item - конкретная кнопка tab
tabsBtn.forEach(function (item) {
     item.addEventListener("click", function () {
          let currentBtn = item;
          let tabId = currentBtn.getAttribute("data-tab");
          let currentTab = document.querySelector(tabId); // показывать таб по id кнопки

          // Если у кнопки нет класса active, тогда выполняем
          if (!currentBtn.classList.contains('active')) {
               tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
               });

               tabsItems.forEach(function (item) {
                    item.classList.remove('active');
               });

               currentBtn.classList.add('active');
               currentTab.classList.add('active');
          }

     });
});

// Если в html не нужен по учмолчанию active, то через Js
// document.querySelector('.tabs__nav-btn').click();

window.onload = function () {
     hljs.highlightAll();
     hljs.initLineNumbersOnLoad();
     new ClipboardJS('.btn-copy');
};


// decoder
function encode() {
     document.getElementById('html-encoded').value = htmlEntities(document.getElementById('html-decode').value);
}

function htmlEntities(str) {
     return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
