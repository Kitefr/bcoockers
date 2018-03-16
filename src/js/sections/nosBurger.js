$(document).ready(function() {
    $("#buttonCard4").click(function() {
        $("div.card4Hover").slideToggle();
    });
    $("div.card4Hover").click(function() {
        $(this).slideUp();
    });
    $("#buttonCard3").click(function() {
        $("div.card3Hover").slideToggle();
    });
    $("div.card3Hover").click(function() {
        $(this).slideUp();
    });

    $("#buttonCard2").click(function() {
        $("div.card2Hover").slideToggle();
    });
    $("div.card2Hover").click(function() {
        $(this).slideUp();
    });
    $("#buttonCard1").click(function() {
        $("div.card1Hover").slideToggle();
    });
    $("div.card1Hover").click(function() {
        $(this).slideUp();
    });
});
