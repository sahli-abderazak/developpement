function somme(n1, n2) {
    let somme = 0;
    for (let i = n1; i <= n2; i++) {
      somme += i;
    }
    document.write("La somme des entiers entre est:", somme);
  }
  function sommeEntiersPairsEntre(n1, n2) {
    let somme = 0;
    for (let i = n1; i <= n2; i++) {
      if (i % 2 === 0) {
        somme += i;
      }
    }
    document.write("La somme des entiers pairs entre est:",somme);
  }
somme(2,3)
sommeEntiersPairsEntre(5,7)