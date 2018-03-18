$("#recipes").click(function() {
  $(".card.mondeinsectes, .card.commentaires").hide();
  $(".card.recettes").show();
});

$("#insectsworld").click(function() {
  $(".card.recettes, .card.commentaires").hide();
  $(".card.mondeinsectes").show();
});

$("#comments").click(function() {
  $(".card.recettes, .card.mondeinsectes").hide();
  $(".card.commentaires").show();
});

$("#recipes").click();

$("#blog a.nav-link").click(function() {
  $("#blog .nav-link").removeClass("active");
  $(this).addClass("active");
});
