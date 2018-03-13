$(document).ready(function() {
    $("#menu-icon").click(function() {
        $(this).toggleClass("open");
        $("#site-container").toggleClass("menu-opened");
        $("body").toggleClass("menu-opened");
        $("#navbar-mobile").toggleClass("show");
        if ($("#logo-header img").attr("src") == "./images/logo_black.png") {
            $("#logo-header img").attr("src", "./images/logo_white.png");
        } else {
            $("#logo-header img").attr("src", "./images/logo_black.png");
        }
    });

    $("#navbar-mobile a").click(function() {
        $("#navbar-mobile").removeClass("show");
        $("#logo-header img").attr("src", "./images/logo_black.png");
        $("#site-container").removeClass("menu-opened");
        $("body").removeClass("menu-opened");
        $("#menu-icon").removeClass("open");
    });
});
