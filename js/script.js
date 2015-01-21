(function() {
  var products;

  products = {
    0: {
      "name": "Rose Panthère",
      "type": "Pull",
      "price": 89,
      "sex": "men",
      "description": "Pull col en &laquo;V&raquo; de couler fushia, détails et logos écrus. A porter sur une chemise, un polo ou directement sur la peau. Très agréable au touché. Lavable en machine",
      "reference": "K-10007-S",
      "disponibility": "ok"
    },
    1: {
      "name": "Petite Marine",
      "type": "Polo",
      "price": 89,
      "sex": "men"
    },
    2: {
      "name": "Monotone",
      "type": "Chemise",
      "price": 89,
      "sex": "men"
    },
    3: {
      "name": "Lime",
      "type": "Pull",
      "price": 89,
      "sex": "women",
      "description": "Pull col &laquo;V&raquo; de couleur vert Lime, détails et logo écrus. A porter sur une chemise, un polo ou directement sur la peau. Trés agréable au touché. Lavable en Machine.",
      "reference": "K-10011-L",
      "disponibility": "ko"
    },
    4: {
      "name": "Moelle",
      "type": "Polo",
      "price": 89,
      "sex": "women"
    },
    5: {
      "name": "Jail",
      "type": "Chemise",
      "price": 89,
      "sex": "women"
    }
  };

  (function($) {
    var id, sex;
    $.urlParam = function(name) {
      var results;
      results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (!results) {
        return false;
      }
      return results[1] || 0;
    };
    $.showProducts = function() {};
    sex = $.urlParam('sex');
    id = $.urlParam('id');
    if (!id && sex) {
      $.each(products, function(index, product) {
        if (sex && product.sex === sex) {
          return $(".Products-list").append('<div class="Item"> <a class="Item-link Link" href="../../html/products/show.html?id=' + index + '"> <figure class="Item-mainImage"> <img src="../../img/product' + index + '.png"> <figcaption class="Item-caption">' + product.name + '</figure> </a> <span class="Item-price">' + product.price + ' €</span>');
        }
      });
    } else if (!id && !sex) {
      $.each(products, function(index, product) {
        return $(".Products-list").append('<div class="Item"> <a class="Item-link Link" href="../../html/products/show.html?id=' + index + '"> <figure class="Item-mainImage"> <img src="../../img/product' + index + '.png"> <figcaption class="Item-caption">' + product.name + '</figure> </a> <span class="Item-price">' + product.price + ' €</span>');
      });
    } else {
      $(".Products-single").append('<div class="Item"> <figure class="Item-mainImage"><img src="../../img/product' + id + '.png"/></figure> <h2 class="Item-caption">' + products[id].name + '</h2> <p class="Item-description">' + products[id].description + '</p> </div> <div class="Item-gallery"> <figure class="Gallery"> <img src="../../img/small' + id + '0.png" class="Gallery-item"/> <img src="../../img/small' + id + '1.png" class="Gallery-item"/> <img src="../../img/small' + id + '2.png" class="Gallery-item"/> </div> <div class="Item-order"> <span class="price">' + products[id].price + ' €</span> <form> <fieldset> <div> <p>Référence</p> <p>' + products[id].reference + '</p> </div> <div> <label>Quantité</label> <input type="text"/> </div> <div> <label> Taille  <span class="helper"><img src="../../img/question.png" width="25" height="25" class="helper-icons"/> <p class="helper-text">Utilisez l’étiquette du vêtement que vous portez</p></span> </label> <select name="size"> <option>S</option> <option>M</option> <option>L</option> <option>XL</option> <option>XXL</option> </select> </div> <div> <p>Disponibilité ?</p> <span class="helper"> <img src="' + (products[id].disponibility === 'ok' ? '../../img/ok.png' : '../../img/delete.png') + '" width="25" height="25" class="helper-icons"/> <p class="helper-text">' + (products[id].disponibility === "ok" ? 'Le stock est suffisant !' : 'Le stock est insuffisant !') + '</p> </span> </div> </fieldset> <input type="submit" class="Btn Btn-big"/> </form> <div> <h3>Livraison</h3> <p>Gratuite en Belgique, France, Pays-bas et Luxembourg</p> </div> </div>');
    }
    return $.showProducts();
  })($);

}).call(this);
