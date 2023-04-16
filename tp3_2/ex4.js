function jouerr()
 {
 nb = parseInt(Math.random() * 10);
 x = 0;

do {
  nbprop = parseInt(prompt("donner un nombre entre 1 et 10"));

  x++;

  if (nbprop < nb) {
    alert("Le nombre est plus grand"+nbprop);
  } else if (nbprop > nb) {
    alert("Le nombre est plus petit"+nbprop);
  }
} while (nbprop != nb);

alert('vous avez trouvé le nombre en '+x+'coups !');
 }
