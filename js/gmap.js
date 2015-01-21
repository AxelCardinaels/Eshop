function initialize() {

    var malmedy = {position : new google.maps.LatLng(50.4222046,6.0149223), bouton : document.getElementById("malmedy")};
    var basile ={position : new google.maps.LatLng(50.2306674,5.3442381), bouton : document.getElementById("basile")};
    var villeNeuve = {position : new google.maps.LatLng(49.963289,5.857741), bouton : document.getElementById("villeneuve")};
    var erpent = {position : new google.maps.LatLng(50.441329,4.905142), bouton : document.getElementById("erpent")};
    var difference = { position : new google.maps.LatLng(50.5235946,5.4213949), bouton : document.getElementById("difference")};



  var mapProp = {
    center: new google.maps.LatLng(50.26768,5.43632,12) ,
    zoom:9,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    zoomControl : true
  };


  var map=new google.maps.Map(document.getElementById("gmap"),mapProp);

    malmedy.bouton.addEventListener("click",function(){changeCenter(malmedy.position)},false);
    basile.bouton.addEventListener("click",function(){changeCenter(basile.position)},false);
    villeNeuve.bouton.addEventListener("click",function(){changeCenter(villeNeuve.position)},false);
    erpent.bouton.addEventListener("click",function(){changeCenter(erpent.position)},false);
    difference.bouton.addEventListener("click",function(){changeCenter(difference.position)},false);


  function changeCenter(position){
    map.setCenter(position);
    map.setZoom(15);

  };

  var malmedyMarker = new google.maps.Marker({
                position: malmedy.position,
                map: map,
    });

  var basileMarker = new google.maps.Marker({
                position: basile.position,
                map: map,
    });

  var villeNeuveMarker = new google.maps.Marker({
                position: villeNeuve.position,
                map: map,
    });

  var erpentMarker = new google.maps.Marker({
                position: erpent.position,
                map: map,
    });

  var differenceMarker = new google.maps.Marker({
                position: difference.position,
                map: map,
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


