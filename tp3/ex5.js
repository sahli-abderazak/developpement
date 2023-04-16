let age = prompt("Entrez votre âge :");


if (isNaN(age)) {
  document.write("Erreur");
} else if (age <= 12) {
    document.write("Vous êtes un enfant.");
} else if (age >= 13 && age <= 18) {
    document.write("Vous êtes un adolescent.");
} else {
    document.write("Vous êtes un adulte.");
}