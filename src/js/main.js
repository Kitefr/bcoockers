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
