let prenoms = [];
let prenom = prompt("entrez un prenom:");

while (prenom !== "") {
  prenoms.push(prenom);
  prenom = prompt("entrez un prenom:");
}

if (prenoms.length > 0) {
  alert("Les prenoms stockes sont : " + prenoms.join(" "));
} else {
  alert("Le tableau ne contient aucun prenom !");
}
function tirage(prenoms) {
    if (prenoms.length === 0) {
      return " erreur !";
    }
    const gangnant = Math.floor(Math.random() * prenoms.length);
    return prenoms[gangnant];
  }

x=tirage(prenoms)
alert(x)