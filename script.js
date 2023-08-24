function afficherResultatPanier(totalPanier) {
    var resultatPanierElement = document.getElementById("resultatPanier") ;
    if( totalPanier!==0) {
        resultatPanierElement.textContent=totalPanier;
        document.getElementById("compteur").style.visibility = "visible";
    } else {
        resultatPanierElement.textContent="";
    }
}

afficherResultatPanier(0);

function recupererValeur() {
     var nombreCroissants =(document.getElementById("quantite1").value) ;

     var valeurPanier=document.getElementById("resultatPanier").textContent;
    if (valeurPanier=="") {
        afficherResultatPanier(0+parseInt(nombreCroissants))
    } else {
        afficherResultatPanier(parseInt(valeurPanier)+(parseInt(nombreCroissants)))
    }
}

