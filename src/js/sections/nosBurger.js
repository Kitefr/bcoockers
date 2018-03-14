$(document).ready(function() {
  $("#buttonCard4").click(function() {
    $("div.card4Hover").toggle(2000, "swing");
  });
  $("div.card4Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
  $("#buttonCard3").click(function() {
    $("div.card3Hover").toggle(2000, "swing");
  });
  $("div.card3Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });

  $("#buttonCard2").click(function() {
    $("div.card2Hover").toggle(2000, "swing");
  });
  $("div.card2Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
  $("#buttonCard1").click(function() {
    $("div.card1Hover").toggle(2000, "swing");
  });
  $("div.card1Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
});
