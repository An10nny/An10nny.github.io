$(function () {




    $("#what .card-body").mCustomScrollbar({
        theme:"default"
    });





//////////////СЧЕТЧИК//////////////////

    var target_block = $(".story__counts");
    var blockStatus = true;
    $(window).scroll( function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
            blockStatus = false;
            calcCount();
        }
    })

    function calcCount() {
        for (var i = 0; i < $('.story__number').length; i++) {
            var end = $('.story__number').eq(i).text();
            countStart(end, i);
        }
    }

    function countStart(end, i) {
        var start = 0;
        var interval = setInterval(function () {
            $('.story__number').eq(i).text(++start);
            if (start == end) {
                clearInterval(interval);
            }
        }, 50);
    }


////////////////UNSLIDER/////////////////////////////

    $(".jon__unslider").unslider({
        nav: false,
        arrows: {
            prev: '<a class="unslider-arrow prev"><span class="material-icons">navigate_before</span></a>',
            next: '<a class="unslider-arrow next"><span class="material-icons">keyboard_arrow_right</span></a>',
        }
    });




    $(".joshua__unslider").unslider({
        nav: false,
        arrows: {
            prev: '<a class="unslider-arrow prev"><span class="material-icons">navigate_before</span></a>',
            next: '<a class="unslider-arrow next"><span class="material-icons">keyboard_arrow_right</span></a>',
        }
    });


//////////////////CЕТКА МАССОНЕРИ///////////////////

    $(window).on('load', function(){
        $ourwork = $('.some__items');
        $ourwork.isotope({
            itemSelector : 'li',
            layoutMode : 'masonry'
        });
    });


    $('.some__items > li').each( function() { $(this).hoverdir(); } );



    /////////////////////СКРЫТИЕ КАРТЫ//////////////////////

    $('.open__map').click(function () {
        $('#open').toggleClass('showmap')
        $(this).find('.close-map').toggle()
    })


    //////////////////////ФИКСИРОВАНИЕ МЕНЮ//////////////////

    $(window).scroll(function () {
        if ($(this).scrollTop() == $('.header-container').height() || $(this).scrollTop() > $('.header-container').height()) {
            $('body').addClass('header-fixed-nav')
        }
        else {
            $('body').removeClass('header-fixed-nav')
        }
    })




    /////////////////////СКРЫТИЕ/ПОКАЗ ОКНА ПОИСКА//////////////////////

    $('.search11,.close11').click(function () {
        $('#form').toggleClass('active')
    })



})