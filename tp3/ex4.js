let nomber = prompt("donner un nombre")
function diviseurs(nombre) {
    let diviseursCount = 0;
    for (let i = 1; i <= nombre; i++) {
      if (nombre % i === 0) {
        diviseursCount++;
      }
    }
    return diviseursCount;
  }
function estpremier(nombre) {
    if (nombre < 2) {
      document.write(nombre + " n'est pas un nombre premier");
      return;
    }
    const divCount = diviseurs(nombre);
    if (divCount === 2) {
      document.write(nombre + ' est un nombre premier');
    } else {
      document.write(nombre + " n'est pas un nombre premier");
    }
  }
  
  document.write(diviseurs(nomber))
 // estpremier(nomber)