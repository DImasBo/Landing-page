$(document).ready(function () {

    //SCROLLING
    $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });



    //SCROLLING


    //NAVIGATION 
    menu.onclick = function nyFunction() {
        var x = document.getElementById('myTopnav');

        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };


    $("header").removeClass("default");
    $(window).scroll(function () {

        if ($(this).scrollTop() > 20) {
            $("header").addClass("default").fadeIn('slow');
            $("a").removeClass("hover_border");
            $("a").addClass("hover_a");
            $("header").css("margin-top", "-50px");
            

        } else {
            $("header").removeClass("default").fadeIn('slow');
            $("a").addClass("hover_border");
            $("a").removeClass("hover_a");
            $("header").css("margin-top", "-20px");

        };
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".totop").css("display", "block");
        } else {
            $(".totop").css("display", "none");

        };
    });
    
    //RELOAD
     $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
});
