function afficherResultatPanier(totalPanier) {
    var resultatPanierElement = document.getElementById("resultatPanier") ;
    if( totalPanier!==0) {
        resultatPanierElement.textContent=totalPanier;
        document.getElementById("compteur").style.visibility = "visible";
        AffchageUIPanier(produit)
    } else {
        resultatPanierElement.textContent="";
    }
}

afficherResultatPanier(0);

function recupererValeur(produit)
 {  
     var valeurPanier=document.getElementById("resultatPanier").textContent;
    if (valeurPanier=="") {
        afficherResultatPanier(0+parseInt(DetermineProduit(produit)));
    } else {
        afficherResultatPanier((parseInt(valeurPanier))+parseInt(DetermineProduit(produit)))
    }
}

function DetermineProduit(produit)
{
    switch (produit) {
        case 1:
        var img_produit_1 = document.getElementById("img1").value;
        var nom_produit_1 = document.getElementById("img1").value;
        var _produit_1 = document.getElementById("img1").value;
        return document.getElementById("quantite1").value;
    
        case 2:
            return document.getElementById("quantite2").value;
    
        default:
            return 0;
    }
}
function AffichageUIPanier()
{

}

function openSidebar() 
{
    document.getElementById("mySidebar").style.width = "250px";
}
function closeSidebar () {
    document.getElementById("mySidebar").style.width="0" ;
}