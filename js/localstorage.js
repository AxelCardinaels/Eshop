/* Woo4men
*
* Script LocalStorage
*
* Started @ 20/01/2015
*/

( function( $ ) {
    "user strict";

    var tableStorage = new Array(),
    nbArticles,
    total;

    //- Add articles to my bag
    var ajouterPanierForm = function( cible ) {
		//Look how many item
        var quantite = $( 'input#quantite' ).val();
		//Show how many item
        var nbArticles = $( 'span#nbArticles' ).text();
        var nouveauNb = parseInt( nbArticles ) + 1;
		$( 'span#nbArticles' ).text( nouveauNb );
        //Take information
		var titre = $( 'span#productTitle' ).text();
		var img = "../css/images/mockUp/chemise1.png";
		var prix = $( 'span#productPrice' ).text();
		var reference = $( 'dd#productReference' ).text();
        var taille = $( 'span#productTaille' ).text();
		//JSON files
        tableStorage.push( { 'name': titre, 'image': img, 'prix': prix, 'quantite': quantite,'taille': taille, 'reference': reference, 'prixTotal': prixTotal } );
		//localStorage.setItem( 'panier', jsonTable );
	};

   

} ) (jQuery);