$(document).ready(function () {
    var banner_height = $("#navscroll").height();
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var currScrollTop = $(this).scrollTop();
        if (scroll >= banner_height && currScrollTop > lastScrollTop) {
            $("#banner").hide();
        } else if (scroll == 0) {
            $("#banner").show();
        }
        lastScrollTop = currScrollTop;

    });

});


/* MENU COLOR CHANGE WHEN COLLAPSE */

$(document).ready(function () {

    $(".collapse").on("show.bs.collapse", function () {
        $("#navscroll").css("transition", "background-color 0.1s ease-in");
        $("#navscroll").css("background-color", "gray");
    });

    $(".collapse").on("hide.bs.collapse", function () {
        $("#navscroll").css("transition", "background-color 0.5s ease-out");
        $("#navscroll").css("background-color", "transparent");
    });


});
