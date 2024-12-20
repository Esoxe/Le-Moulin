var nb_element_panier=0;
var produits=["NULL","Croissant","Pain au chocolat"];

function compteur_panier(totalPanier) {
    var resultatPanierElement = document.getElementById("resultatPanier") ;
    if( totalPanier!==0) {
        resultatPanierElement.textContent=totalPanier;
        document.getElementById("compteur").style.visibility = "visible";
    } else {
        resultatPanierElement.textContent="";
        document.getElementById("compteur").style.visibility = "hidden";
    }
}

compteur_panier(0);

function openSidebar() {
    document.getElementById("mySidebar").style.width ="400px"
}

function supprimer_element_panier(produit){
    const item = document.querySelector('[data-id="produit'+produit+'_panier"]');
    if(item){
        item.remove();
        var valeurPanier = document.getElementById("resultatPanier").textContent;
        if(valeurPanier && valeurPanier >0){
            compteur_panier(Number(valeurPanier)-1);
        }
    }
}

function update_quantite_panier(produit,type){ //type : 1= ajout -1=suprresion
        var prix_panier = document.getElementById("prix"+produit+"_panier");
        var quantite_panier = document.getElementById("quantite"+produit+"_panier");
        var valeurPanier = document.getElementById("resultatPanier");
        const prixTotal = document.getElementById("prixTotal");
        if(Number(quantite_panier.textContent)+type<=0){
            supprimer_element_panier(produit)
        }
        else{
        prix_panier.textContent=String((Number(prix_panier.textContent)+type*prix_panier.textContent/quantite_panier.textContent).toFixed(2));
        quantite_panier.textContent=String(Number(quantite_panier.textContent)+type);
        valeurPanier.textContent=String(Number(valeurPanier.textContent)+type);
        }
        prixTotal.textContent=String((Number(prixTotal.textContent)+type*prix_panier.textContent/quantite_panier.textContent).toFixed(2));
        
}

function update_ajout_Panier(produit) { //source=1 si ajout panier depuis la page source ⁼ 2 si ajout depuis panier type correspond a l'ajout ou a la supression
    var prix = document.getElementById("prix"+produit);
    var prix_panier = document.getElementById("prix"+produit+"_panier");
    var modifier = document.getElementById("quantite"+produit);
    var quantite_panier = document.getElementById("quantite"+produit+"_panier");
    quantite_panier.textContent=String(Number(quantite_panier.textContent)+Number(modifier.textContent));
    prix_panier.textContent=String((Number(prix_panier.textContent)+Number(prix.textContent)).toFixed(2));

    
}

function ajoute_element_panier(produit){ // AJout un element non present dans le panier
    const nouvelElement = document.createElement("li");
    nouvelElement.classList.add("item_panier")
    nouvelElement.setAttribute("data-id","produit"+produit+"_panier");
    const img = document.createElement("img")
    img.setAttribute("src","image/produit"+produit+".png")
    img.setAttribute("alt","Produit 3");
    nouvelElement.appendChild(img);
    // Créer et ajouter le texte (nom du produit)
    const pNom = document.createElement("p");
    pNom.classList.add("text_panier");
    pNom.textContent = produits[produit];  // Remplacer par le nom du produit
    nouvelElement.appendChild(pNom);

    // Créer et ajouter le prix
    const pPrix = document.createElement("p");
    const spanPrix = document.createElement("span");
    spanPrix.setAttribute("id", "prix"+produit+"_panier");
    spanPrix.textContent = "0.00"  ;
    pPrix.appendChild(spanPrix);
    pPrix.innerHTML += "€";  // Ajoute le symbole de l'euro
    nouvelElement.appendChild(pPrix);

    // Créer et ajouter les boutons de quantité
    const divButton = document.createElement("div");
    divButton.classList.add("button_panier");

    const buttonMoins = document.createElement("button");
    buttonMoins.classList.add("round_button");
    buttonMoins.textContent = "−";
    buttonMoins.onclick= function(event) {
                                     event.stopPropagation();
                                     update_quantite_panier(produit,-1); }; 
    divButton.appendChild(buttonMoins);

    const spanQuantite = document.createElement("span");
    spanQuantite.setAttribute("id", "quantite"+produit+"_panier");
    spanQuantite.classList.add("quantite_nb");
    spanQuantite.textContent = "0";
    divButton.appendChild(spanQuantite);

    const buttonPlus = document.createElement("button");
    buttonPlus.classList.add("round_button");
    buttonPlus.textContent = "＋";
    buttonPlus.onclick= function() { update_quantite_panier(produit,1); }; 
    divButton.appendChild(buttonPlus);

    // Ajouter les boutons à l'élément <li>
    nouvelElement.appendChild(divButton);

    // Ajouter le nouvel élément <li> à la liste <ul>
    const listePanier = document.querySelector(".liste_panier");
    listePanier.appendChild(nouvelElement);
}


function gestion_Panier(produit)   
 {  
    var message = '[data-id="produit'+produit+'_panier"]';
    const item = document.querySelector(message);
    if(item==null){
        ajoute_element_panier(produit,1);
    }
    update_ajout_Panier(produit);
    var prixTotal=document.getElementById("prixTotal")
    var prix = document.getElementById("prix"+produit)
    var quantite = document.getElementById('quantite'+produit)
    var valeurPanier=document.getElementById("resultatPanier").textContent;
    if (valeurPanier=="") {
        compteur_panier(0+Number(quantite.textContent));
    } else {
        compteur_panier(Number(valeurPanier)+Number(quantite.textContent))
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

if(sidebar.style.width!="400px") {
panier.addEventListener('mouseover',() => {
    sidebar.style.width="50px"
})
}
panier.addEventListener('mouseout',() => {
    if(sidebar.style.width==="50px"){
    sidebar.style.width="0px"
    }
})
