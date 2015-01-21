

        // var boutonDetails = document.getElementById("bouton__details");
        //var boutonTaille = document.getElementById("bouton__taille");
        //var boutonLivraison = document.getElementById("bouton__livraison");



        //boutonDetails.addEventListener("click",function(e){
        //    e.preventDefault();
        //    var href= boutonDetails.href.split("#");
        //    href= document.getElementById(href[1]);
        //    href.style.display ="inline-block";
        //    $(href).siblings().css("display" , "none");
        //});
        //boutonTaille.addEventListener("click",function(e){e.preventDefault();});
        //boutonLivraison.addEventListener("click",function(e){e.preventDefault();});


        var boutons=[];
        boutons[0] = document.getElementById("bouton__details");
        boutons[1] = document.getElementById("bouton__taille");
        boutons[2] = document.getElementById("bouton__livraison");

        var test= function(){

            var href = boutons[0].href.split("#");
            href = document.getElementById(href[1]);
            href.style.display = "inline-block";
            $(".infos__entretien").css("display","inline-block");

            //for(var i=0; i < boutons.length; i++){
              //  boutons[i].addEventListener("click",function(e){
                //    e.preventDefault();
                  //  var href= boutons[i].href.split("#");
                    //href= document.getElementById(href[1]);
                    //href.style.display ="inline-block";
                    //$(href).siblings().css("display" , "none");

                    //console.log(i);
                //});

            boutons[0].addEventListener("click", function (e) {
                e.preventDefault();

                boutons[0].className="bouton--small bouton--selected infos__ongletdetails";
                boutons[1].className="bouton--small bouton--unselected infos__onglettailles";
                boutons[2].className="bouton--small bouton--unselected infos__ongletlivraison";
                var href = boutons[0].href.split("#");
                href = document.getElementById(href[1]);
                href.style.display = "inline-block";
                $(".infos__entretien").css("display","inline-block");
                $(".infos__entretien").addClass( "text_animation");
                href.className = href.className+" "+"text_animation";
                $(href).siblings().css("display", "none");



            });

            boutons[1].addEventListener("click", function (e) {
                e.preventDefault();

                boutons[0].className="bouton--small bouton--unselected infos__ongletdetails";
                boutons[1].className="bouton--small bouton--selected infos__onglettailles";
                boutons[2].className="bouton--small bouton--unselected infos__ongletlivraison";
                var href = boutons[1].href.split("#");
                href = document.getElementById(href[1]);
                href.style.display = "inline-block";
                href.className = href.className+" "+"text_animation";
                $(href).siblings().css("display", "none");
                $(".infos__entretien").css("display","none");


            });

            boutons[2].addEventListener("click", function (e) {
                e.preventDefault();

                boutons[0].className="bouton--small bouton--unselected infos__ongletdetails";
                boutons[1].className="bouton--small bouton--unselected infos__onglettailles";
                boutons[2].className="bouton--small bouton--selected infos__ongletlivraison";
                var href = boutons[2].href.split("#");
                href = document.getElementById(href[1]);
                href.style.display = "inline-block";
                href.className = href.className+" "+"text_animation";
                $(href).siblings().css("display", "none");
                $(".infos__entretien").css("display","none");


            });



        };




        test();






        function isElementVisible(elementToBeChecked)
        {
            var TopView = $(window).scrollTop();
            var BotView = TopView + $(window).height();
            var TopElement = $(".product__section").offset().top;
            var BotElement = TopElement + $(".product__section").height();
            return ((BotElement <= BotView) && (TopElement >= TopView));
        }


        $(window).scroll(function () {
            isOnView = isElementVisible($(".product__section"));
            if(isOnView){

                $(".product__infos").fadeOut(500);
            }else{ // If not visible

                $(".product__infos").fadeIn(500);


            }


        });


