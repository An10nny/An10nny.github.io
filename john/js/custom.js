
const menu=document.querySelector('.header__navigation'),
      burger=document.querySelector('.header__ham'),
      overlay=document.querySelector('.overlay');

burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    startMenu()

});

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    // unlockScroll();
});

menu.addEventListener('click',(e)=>{
    if (e.target.classList.contains('menu__link') && !e.target.classList.contains('menu__link-dropdown')){
        //e.preventDefault();
        menu.classList.remove('open');
        overlay.classList.remove('open');
    }
    if (e.target.classList.contains('menu__link-dropdown')) {
        e.preventDefault();
        e.target.closest('.header__menu').classList.add('transformation');
        e.target.closest('.menu__item').querySelector('.menu__sub').classList.add('transformation');
    }
    if (e.target.classList.contains('sub__text')) {
        e.preventDefault();
        e.target.closest('.header__menu').classList.remove('transformation');
        e.target.closest('.menu__item').querySelector('.menu__sub').classList.remove('transformation');
    }

})

function startMenu(){
   document.querySelector('.header__menu').classList.remove('transformation');
   document.querySelector('.menu__sub').classList.remove('transformation');
}

$(function () {







    // //ПЛАВНАЯ ПРОКРУТКА ВВЕРХ //
    //
    // $('.footer__icon').click(function(){
    //     $('html, body').animate({scrollTop : 0},800);
    //     return false;
    // });
    //
    // //ПЛАВНАЯ ДЕМОНСТРАЦИЯ ИКОНКИ//
    //
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 200) {
    //         $('.footer__icon').fadeIn();
    //     } else {
    //         $('.footer__icon').fadeOut();
    //     }
    // });



})