$(function () {


    //////////////ПРОКРУТКА//////////////////

    $('.case-study1').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        responsive:{
            0:{
                dots:true,
                nav:false
            },
            769:{
                dots:false,
                nav:true
            }
        }
    })



    //////////////ПРОКРУТКА ВЕРХНЕГО СЛАЙДА//////////////////

    $('.slick').slick({
        responsive: [

            {
                breakpoint: 481,
                settings: {

                    slidesToShow: 1,
                    dots: true
                }
            },




            {
                breakpoint: 769,
                settings: {
                    dots: true
                }
            },

        ]
    });





//////////////ПРОКРУТКА НИЖНЕГО СЛАЙДА//////////////////




    $('.slick1').slick({
        responsive: [

            {
                breakpoint: 481,
                settings: {

                    slidesToShow: 1,
                    dots: true
                }
            },




            {
                breakpoint: 769,
                settings: {
                    dots: true
                }
            },

        ]
    });



//////////////ПЛАВНАЯ ДЕМОНСТРАЦИЯ ИКОНКИ//////////////////

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.footer__icon').fadeIn();
        } else {
            $('.footer__icon').fadeOut();
        }
    });


//////////////ПЛАВНАЯ ПРОКРУТКА ВВЕРХ//////////////////

    $('.footer__icon').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });






//////////////СЧЕТЧИК//////////////////

    var target_block = $(".counts");
    var blockStatus = true;
    $(window).scroll( function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
            blockStatus = false;
            calcCount();
        }
    })

    function calcCount() {
        for (var i = 0; i < $('.counts__title').length; i++) {
            var end = $('.counts__title').eq(i).text();
            countStart(end, i);
        }
    }

    function countStart(end, i) {
        var start = 0;
        var interval = setInterval(function () {
            $('.counts__title').eq(i).text(++start);
            if (start == end) {
                clearInterval(interval);
            }
        }, 5);
    }



})