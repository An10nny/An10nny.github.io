$(function () {



  //СЛАЙДЕР//

    $('.clients__pictures').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2,
                        dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


 //ФИКСИРУЕМОЕ МЕНЮ//

    $(window).scroll(function () {
        if ($(this).scrollTop() == $('.header').height() || $(this).scrollTop() > $('.header').height()) {
            $('body').addClass('header-fixed-nav')
        }
        else {
            $('body').removeClass('header-fixed-nav')
        }
    })

    //ПЛАВНАЯ ПРОКРУТКА ВВЕРХ //

    $('.footer__icon').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    //////////////ПЛАВНАЯ ДЕМОНСТРАЦИЯ ИКОНКИ//////////////////

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.footer__icon').fadeIn();
        } else {
            $('.footer__icon').fadeOut();
        }
    });




//АНИМИРУЕМ PROGRESS BAR//
    function moveProgressBar(node, nodeline, tooltip, animationlength = 1500) { // node - название класса, где присутствует data-атрибут, второй параметр - название класса линии, третий - название класса для подсказки, 4-й параметр - скорость анимации, которая будет равна по умолчанию 1.5с
        const progressElement = $(node); // в эту переменную положим выгрузку из элементов
// далее перебериаем каждый элемент при помощи функции each
        progressElement.each(function (index, item) {
// console.log(item) // элемент
            $(item).find(nodeline).animate({ // внутри progress__element ищем progress__line и когда находим выполняем метод animate
// анимируем свойство width
                width: item.dataset.progressPercent + '%' // в качестве значения свойства width подставляем значение из data атрибута, добаляем к считанному значению проценты
            }, animationlength); // время анимации 1.5 с
// после этого мы подсказываем подсказку tooltip через 1.5 s
            $(item).find(tooltip).show(animationlength); // показываем через 1.5 s
        })
    }

    let animate=true
    $(window).scroll(function(){
       if ($('.our').offset().top <= $(window).scrollTop()+150){
            if(animate){
                    moveProgressBar('.progress__element','.progress__line','.progress__tooltip')   //вызиваем функцию анаимирования
            }
           animate=false
       }

    })

})