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

function openSidebar() {
    document.getElementById("mySidebar").style.width ="300px"
}

function recupererValeur(produit)
 {  
    var prixTotal=document.getElementById("prixTotal")
    var prix = document.getElementById("prix"+produit)
    var quantite = document.getElementById('quantite'+produit)
    var valeurPanier=document.getElementById("resultatPanier").textContent;
    if (valeurPanier=="") {
        afficherResultatPanier(0+Number(quantite.textContent));
    } else {
        afficherResultatPanier(Number(valeurPanier)+Number(quantite.textContent))
    }
    prixTotal.textContent=(Number(prixTotal.textContent)+Number(prix.textContent)).toFixed(2);
}

window.onclick =function(event) {
    var sidebar =document.getElementById("mySidebar")
    var panier = document.getElementById("panier_overlay")
    var add_panier1 = document.getElementById("add_panier1")
    var add_panier2 = document.getElementById("add_panier2")
    if(!sidebar.contains(event.target) && !panier.contains(event.target) && !add_panier1.contains(event.target) && !add_panier2.contains(event.target)){
        closeSidebar();
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0"
}

function update_Quantite(produit,modifier,prix_unite) {
    var prix = document.getElementById("prix"+produit);
    var quantite = document.getElementById("quantite"+produit);
    if(quantite.textContent>1 || modifier>0) {
    quantite.textContent=String(Number(quantite.textContent)+modifier)
    prix.textContent=String((Number(prix.textContent)+prix_unite).toFixed(2))
    }
}
const panier = document.getElementById("panier_overlay");
const sidebar = document.getElementById("mySidebar");

if(sidebar.style.width!="300px") {
panier.addEventListener('mouseover',() => {
    sidebar.style.width="50px"
})
}
panier.addEventListener('mouseout',() => {
    if(sidebar.style.width==="50px"){
    sidebar.style.width="0px"
    }
})

const cartItems =document.getElementById("cart-items");

cart=[]

function addToCart(item){
    const name = getElementById(item)
    

}



function update_cart(){
    cartItems.innerHTML=""
    for(const items in cart) {

    }
}   
