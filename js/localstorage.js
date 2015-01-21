/* Woo4men
*
* Script LocalStorage
*
* Started @ 20/01/2015
*/

( function( $ ) {
    "user strict";

    var tableStorage = new Array();
    var addPanier;

    if( document.querySelector(".panier")){
        if(localStorage.getItem('nom') == null){
            hidePanier();
        }
    }

     

    if(document.querySelector(".validation__infos")){
        var registerBouton = document.querySelector(".validation__infos");
        registerBouton.addEventListener("click",saveUser,false);
    }
    
    if(document.querySelector(".back__site")){
        var clearBouton = document.querySelector(".back__site");
        clearBouton.addEventListener("click",clear,false);
    }
    
    if(document.querySelector(".panier__send")){
        var panierBouton = document.querySelector(".panier__send");
        panierBouton.addEventListener("click",addPanier,false);
    }
    
    if(document.querySelector(".need__all")){
        setInfos();
        setUser();
    }

    if(document.querySelector(".need__infos")){
        setInfos();
    }

   




    setPanierNombre();


function addPanier(){
    tableStorage = new Array();
    console.log("coucou");

    window.localStorage.clear();


    var nom = document.querySelector('.infos__name').innerHTML;
    var type = document.querySelector('.infos__category').innerHTML;
    var taille = document.querySelector('.infos__size').value;
    var prix = document.querySelector('.infos__price').innerHTML;
    var img = "../img/large/chemises/chemise1a.png";
    var nombre = Number(document.querySelector('.panier__nombre').innerHTML)+ 1;

    tableStorage.push( { 'nom': nom, 'type': type, 'prix': prix, 'taille': taille, 'img' : img, 'quantite' : nombre} );

    localStorage.setItem('nom',nom);
    localStorage.setItem('type',type);
    localStorage.setItem('prix',prix);
    localStorage.setItem('taille',taille);
    localStorage.setItem('img',img);
    localStorage.setItem('quantite',nombre);


    setPanierNombre();

}

function setPanierNombre(){
    if(localStorage.getItem('quantite') === null){
        document.querySelector('.panier__nombre').innerHTML = 0;
    }else{
         var elemQuantite= document.getElementsByClassName('panier__nombre');
         console.log(elemQuantite)

         for(i=0;i<elemQuantite.length;i++){
            elemQuantite[0+i].innerHTML = localStorage.getItem('quantite');
         }
    }
   
}

function setInfos(){

    if(document.querySelector('.item__name') == null){

        document.querySelector('.item__thumbnail--small img').src = localStorage.getItem('img');
        document.querySelector('.item__name--small').innerHTML = localStorage.getItem('nom');
        document.querySelector('.item__category--small').innerHTML = localStorage.getItem('type');
        document.querySelector('.item__size').innerHTML = localStorage.getItem('taille');
        document.querySelector('.item__price--small').innerHTML = localStorage.getItem('prix');
        var res = localStorage.getItem('prix').split("€");
        document.querySelector('span.panier__total').innerHTML = Number(res[0])*localStorage.getItem('quantite')+"€";

    }else{
        document.querySelector('.item__thumbnail img').src = localStorage.getItem('img');
        document.querySelector('.item__name').innerHTML = localStorage.getItem('nom');
        document.querySelector('.item__category').innerHTML = localStorage.getItem('type');
        document.querySelector('.item__size').innerHTML = localStorage.getItem('taille');
        document.querySelector('.item__price').innerHTML = localStorage.getItem('prix');
        var res = localStorage.getItem('prix').split("€");
        document.querySelector('span.panier__total').innerHTML = Number(res[0])*localStorage.getItem('quantite')+"€";

    }
    
} 



function saveUser(){
    var nomUser = document.querySelector('#name').value;
    var prenomUser = document.querySelector('#surname').value;
    var telephone = document.querySelector('#telephone').value;
    var rue = document.querySelector('#rue').value;
    var pays = document.querySelector('#pays').value;
    var ville = document.querySelector('#ville').value;
    var postal = document.querySelector('#postal').value;

    localStorage.setItem('nomUser',nomUser);
    localStorage.setItem('prenomUser',prenomUser);
    localStorage.setItem('telephone',telephone);
    localStorage.setItem('rue',rue);
    localStorage.setItem('pays',pays);
    localStorage.setItem('ville',ville);
    localStorage.setItem('postal',postal);
}

function setUser(){
        document.querySelector('.user__name').innerHTML = localStorage.getItem('prenomUser') + " " + localStorage.getItem('nomUser');
        document.querySelector('.user__rue').innerHTML = localStorage.getItem('rue');
        document.querySelector('.user__ville').innerHTML = localStorage.getItem('postal') + " " + localStorage.getItem('ville') + ", " +localStorage.getItem('pays');
}

function clear(){
    window.localStorage.clear();
}

function hidePanier(){
    console.log( document.querySelector(".panier"))
    document.querySelector(".panier__checkout").style.display = "none";
    document.querySelector(".panier__list").style.display = "none";
    document.querySelector(".panier__empty").style.display = "block";
}
   

} ) (jQuery);