$(document).ready(function () {

  // Par défaut : affiche la présentation ds le div "page"
  $("#page").load("EmmanuelLautréamont.html");

  // Affiche le thème cliqué ds le div "page"
  $('ul li').click(function(){
    var lien=$(this).text(); // recup val de li
    lien = lien.replace(/\s+/g, '') + ".html"; // suppr des espaces + .html
    $("#page").load(lien);
  });
});
