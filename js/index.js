$(document).ready(function() {

	$('.carousel').carousel({
  		interval: 2000
	});

											// *** INICIO AJAX *** //

	var ajax = $.ajax({
  		method: "GET",
  		url: "index.json",
  		success: function(dados){
  			var dado = $.parseJSON(dados);							// traz os dados do JSON

  			// *** traz os dados do item visitado *** //

  			var name_0 = dado[0].data.item.name;
  			$("strong:eq(0)").text(dado[0].data.item.price);
  			$("#payments0").text(dado[0].data.item.productInfo.paymentConditions);

  			var nameFull_0 = name_0.substr(0,103);					// corta a string name e poe ...
  			var nameCut_0 = $("#infoDefinitive").text(nameFull_0 + " ...");

  			// *** traz os dados do carrossel *** //

  			var name_1 = (dado[0].data.recommendation[0].name);
  			$("strong:eq(1)").text(dado[0].data.recommendation[0].price);
  			$("#payments1").text(dado[0].data.recommendation[0].productInfo.paymentConditions);
// prod 1  			
		 	var nameFull_1 = name_1.substr(0,98);
  			var nameCut_1 = $("#product1").text(nameFull_1 + " ...");

			$("#product2").text(dado[0].data.recommendation[1].name);
/*  2 */ 	$("strong:eq(2)").text(dado[0].data.recommendation[1].price);
  			$("#payments2").text(dado[0].data.recommendation[1].productInfo.paymentConditions);
  			
  			var name_3 = (dado[0].data.recommendation[2].name);
  			$("strong:eq(3)").text(dado[0].data.recommendation[2].price);
  			$("#payments3").text(dado[0].data.recommendation[2].productInfo.paymentConditions);
/*  3 */		
		 	var nameFull_3 = name_3.substr(0,93);
  			var nameCut_3 = $("#product3").text(nameFull_3 + " ..."); 

  			$("#product4").text(dado[0].data.recommendation[3].name);
/*  4 */  	$("strong:eq(4)").text(dado[0].data.recommendation[3].price);
  			$("#payments4").text(dado[0].data.recommendation[3].productInfo.paymentConditions);

  			var name_5 = (dado[0].data.recommendation[4].name);
  			$("strong:eq(5)").text(dado[0].data.recommendation[4].price);
  			$("#payments5").text(dado[0].data.recommendation[4].productInfo.paymentConditions);
/*  5 */		
		 	var nameFull_5 = name_5.substr(0,95);
  			var nameCut_5 = $("#product5").text(nameFull_5 + " ...");

  			var name_6 = (dado[0].data.recommendation[5].name);
  			$("strong:eq(6)").text(dado[0].data.recommendation[5].price);
  			$("#payments6").text(dado[0].data.recommendation[5].productInfo.paymentConditions);
/*  6 */		
		 	var nameFull_6 = name_6.substr(0,95);
  			var nameCut_6 = $("#product6").text(nameFull_6 + " ..."); 	  	

  			var name_7 = (dado[0].data.recommendation[5].name);
  			$("strong:eq(7)").text(dado[0].data.recommendation[5].price);
  			$("#payments7").text(dado[0].data.recommendation[5].productInfo.paymentConditions);
/*  7 */		
		 	var nameFull_7 = name_7.substr(0,95);
  			var nameCut_7 = $("#product7").text(nameFull_7 + " ..."); 	   					 		
		 	
  			var name_8 = (dado[0].data.recommendation[6].name);
  			$("strong:eq(8)").text(dado[0].data.recommendation[6].price);
  			$("#payments8").text(dado[0].data.recommendation[6].productInfo.paymentConditions);
/*  8 */		
		 	var nameFull_8 = name_8.substr(0,94);
  			var nameCut_8 = $("#product8").text(nameFull_8 + " ..."); 

  			var name_9 = (dado[0].data.recommendation[7].name);
  			$("strong:eq(9)").text(dado[0].data.recommendation[7].price);
  			$("#payments9").text(dado[0].data.recommendation[7].productInfo.paymentConditions);
/*  9 */		
		 	var nameFull_9 = name_9.substr(0,94);
  			var nameCut_9 = $("#product9").text(nameFull_9 + " ...");

            var name_10 = (dado[0].data.recommendation[8].name);
            $("strong:eq(10)").text(dado[0].data.recommendation[8].price);
            $("#payments10").text(dado[0].data.recommendation[8].productInfo.paymentConditions);
/*  10 */        
            var nameFull_10 = name_10.substr(0,99);
            var nameCut_10 = $("#productView1").text(nameFull_10 + " ..."); 

            var name_11 = (dado[0].data.recommendation[3].name);
            $("strong:eq(11)").text(dado[0].data.recommendation[3].price);
            $("#payments11").text(dado[0].data.recommendation[3].productInfo.paymentConditions);
/*  11 */        
            var nameFull_11 = name_11.substr(0,103);
            var nameCut_11 = $("#productView2").text(nameFull_11 + " ...");                   

  		}
	});										

                                            // *** FIM AJAX ***//

                                            // *** EFEITOS DO SLIDER *** //
    $(".botao").hide();                                            
                                            
	$("#div_slide").on('mouseenter', function() {
		$(this).css({
			'background-color': '#ccc',
            'cursor': 'pointer'
		});
        $(".botao").fadeIn("slow");
	});

	$("#div_slide").on('mouseleave', function() {
		$(this).css({
			'background-color': '#fff'
		});
        $(".botao").fadeOut("slow");
	});

    $(".botao").on("mouseenter", function() {
        $(".material-icons").css("color","orange");
    });

    $(".botao").on("mouseleave", function() {
        $(".material-icons").css("color","black");
    });

                                            // *** FIM EFEITOS *** //

                                            // *** BULLETS *** //

    $(".circle div:nth-child(1)").addClass("ativo");     
    
    function timer() {

        if ($(".circle div:nth-child(1)").hasClass("ativo")) {
            $(".circle div:nth-child(1)").removeClass("ativo");
            $(".circle div:nth-child(2)").addClass("ativo");
        }
        else if($(".circle div:nth-child(2)").hasClass("ativo")) {
            $(".circle div:nth-child(2)").removeClass("ativo");
            $(".circle div:nth-child(3)").addClass("ativo");
        }
        else if($(".circle div:nth-child(3)").hasClass("ativo")) {
            $(".circle div:nth-child(3)").removeClass("ativo");
            $(".circle div:nth-child(1)").addClass("ativo");
        }  
    
    } 
    
    setInterval(timer,2000); 

}); 
