$(document).ready(function(){
			//variabelen declareren
			var VeldBreedte = ($("#Speelveld").width() - 70);
			var VeldBreedteMin = 10;
			var VeldHoogte = ($("#Speelveld").height() - 70);
			var VeldHoogteMin = 10;
			var AantalSec = 15;
			var Tijd = AantalSec;
			var Score = 1;
			
			//uitleg wegklikken
			$("#Uitleg").click(function(){
				$(this).remove();
			})
			//winnaar wegklikken
			$("#Winner").click(function(){
				$(this).css({"visibility": "hidden"});
			})
			
			//verliezer wegklikken
			$("#Loser").click(function(){
				$(this).css({"visibility": "hidden"});
			})
			
            $("#startKnop").click(function () {
				//buttons zichtbaar maken en verbergen van divs en score updaten
				$("Button").css({"visibility": "visible"});
				$("#Uitleg").css({"visibility": "hidden"});
				$("#Winner").css({"visibility": "hidden"});
				$("#Loser").css({"visibility": "hidden"});
				$("#ScoreBord").text("Level " + Score);
				$("#Button1").css({"border": "solid"});
				
				//QuitButton Tonen
				$("#QuitButton").css({"visibility": "visible"});
				
				//hover instellen
				$("Button").hover(function(){
					$(this).css({"border-width": "4px"});
				});
		
				//disable buttons behalve button1
				$("Button").attr('disabled','disabled');
				$("#Button1").removeAttr('disabled');
				
				//layout buttons hiden
				$("#VoetbalLayout").css({"visibility": "hidden"});
				$("#BasketbalLayout").css({"visibility": "hidden"});
				$("#BasicLayout").css({"visibility": "hidden"});
				
				//timer instellen
				MyTimer = setInterval(function () {
					$("#CountDownTimer").text("0:" + Tijd--);
				}, 1000);
				
				
				//spel resetten(verloren)
					MyTimeOut = setTimeout(function(){
					clearInterval(MyTimer);
					//tijd resetten
					AantalSec = 15;
					Tijd = AantalSec;
					
					//startbuttontekst veranderen
					$("#startKnop").text("Start Game");
					
					//border verwijderen
					$("Button").css({"border": "none"});
					
					//layout buttons visible zetten
					$("#VoetbalLayout").css({"visibility": "visible"});
					$("#BasketbalLayout").css({"visibility": "visible"});
					$("#BasicLayout").css({"visibility": "visible"});
					
					//buttons resetten
					$("Button").css({"visibility": "hidden"});
					$("Button").attr('disabled','disabled');
					$("#startKnop").css({"visibility": "visible"});
					$("#Button1").removeAttr('disabled');
					$("#Loser").text("Jammer! Volgende keer wat sneller zijn! Jouw score was " + Score);
					$("#Loser").css({"visibility": "visible"});
					
					//Score resetten
					Score = 1;
				}, (Tijd * 1000) + 2000);
				
				//random positions en z-index instellen
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button1").css('left', RandomX);
				$("#Button1").css('top', RandomY);
				$("#Button1").css({"z-index": "10"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button2").css('left', RandomX);
				$("#Button2").css('top', RandomY);
				$("#Button2").css({"z-index": "9"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button3").css('left', RandomX);
				$("#Button3").css('top', RandomY);
				$("#Button3").css({"z-index": "8"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button4").css('left', RandomX);
				$("#Button4").css('top', RandomY);
				$("#Button4").css({"z-index": "7"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button5").css('left', RandomX);
				$("#Button5").css('top', RandomY);
				$("#Button5").css({"z-index": "6"})
				
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button6").css('left', RandomX);
				$("#Button6").css('top', RandomY);
				$("#Button6").css({"z-index": "5"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button7").css('left', RandomX);
				$("#Button7").css('top', RandomY);
				$("#Button7").css({"z-index": "4"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button8").css('left', RandomX);
				$("#Button8").css('top', RandomY);
				$("#Button8").css({"z-index": "3"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);;
				$("#Button9").css('left', RandomX);
				$("#Button9").css('top', RandomY);
				$("#Button9").css({"z-index": "2"})
				
				var RandomX = Math.floor((Math.random()* VeldBreedte) + VeldBreedteMin);
				var RandomY = Math.floor((Math.random()* VeldHoogte) + VeldHoogteMin);
				$("#Button10").css('left', RandomX);
				$("#Button10").css('top', RandomY);
				$("#Button10").css({"z-index": "1"})
				
				//startknop verbergen
 				$(this).css({"visibility": "hidden"});           
				});
				
			//QuitButton
			$("#QuitButton").click(function(){
					clearInterval(MyTimer);
					clearTimeout(MyTimeOut);
					//tijd resetten
					AantalSec = 15;
					Tijd = AantalSec;
					
					//startbuttontekst veranderen
					$("#startKnop").text("Start Game");
					
					//border verwijderen
					$("Button").css({"border": "none"});
					
					//layout buttons visible zetten
					$("#VoetbalLayout").css({"visibility": "visible"});
					$("#BasketbalLayout").css({"visibility": "visible"});
					$("#BasicLayout").css({"visibility": "visible"});
					
					//buttons resetten
					$("Button").css({"visibility": "hidden"});
					$("Button").attr('disabled','disabled');
					$("#startKnop").css({"visibility": "visible"});
					$("#Button1").removeAttr('disabled');
					
					//Score resetten
					Score = 1;
					//button hiden
					$("#QuitButton").css({"visibility": "hidden"});
			});
			

			//enable buttons, border geven, hover instellen
			$("#Button1").click(function() {
				$("#Button2").removeAttr('disabled');
				$("#Button2").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button2").click(function() {
				$("#Button3").removeAttr('disabled');
				$("#Button3").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button3").click(function() {
				$("#Button4").removeAttr('disabled');
				$("#Button4").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button4").click(function() {
				$("#Button5").removeAttr('disabled');
				$("#Button5").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button5").click(function() {
				$("#Button6").removeAttr('disabled');
				$("#Button6").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button6").click(function() {
				$("#Button7").removeAttr('disabled');
				$("#Button7").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button7").click(function() {
				$("#Button8").removeAttr('disabled');
				$("#Button8").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button8").click(function() {
				$("#Button9").removeAttr('disabled');
				$("#Button9").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			$("#Button9").click(function() {
				$("#Button10").removeAttr('disabled');
				$("#Button10").css({"border": "solid"});
				$(this).css({"visibility": "hidden"});
			})
			//spel resetten(winnaar)
			$("#Button10").click(function() {
				//buttons resetten
				$("#startKnop").css({"visibility": "visible"});
				$(this).css({"visibility": "hidden"});
				$("#startKnop").text("Start");
				//score updaten
				Score++;
				$("#ScoreBord").text("Level " + Score);
				$("#Winner").css({"visibility": "visible"});
				
				//border verwijderen
				$("Button").css({"border": "none"});
				//timers resetten
				clearInterval(MyTimer);
				clearTimeout(MyTimeOut);
				
				//tijd inkorten
				for(i = 0;i < 15; i++)
				{
					if(Score == i)
					{
						AantalSec -= 1;
						
					}
				}
				//tijd resetten
				Tijd = AantalSec;
			});
			
			
				//Layout voetbal
				$("#VoetbalLayout").click(function(){
					//buttons in voetballen veranderen
					$("Button").text("");
					$("Button").append('<img src="Assets/Images/VoetbalSprite.jpg" height="32" width="32"></img>');
					$("Button").css({'background': 'transparent'});
					$("Button").css({"border": "none"});
					
					//speelveld in voetbalveld veranderen
					$("img[src$='Assets/Images/BasketbalveldSprite.png']").remove();
					$("#Speelveld").append('<img src="Assets/Images/VoetbalveldSprite.png" height="' + $("#Speelveld").height() + ' + 70" width="' + $("#Speelveld").width() + ' + 70"></img>'); 
					
					//Kleuren veranderen
					$("#startKnop").css({"color": "white"}); 
					$("#startKnop").css({"background-color": "green"}); 
					$("#startKnop").css({"border-color": "white"}); 
					
					$("#QuitButton").css({"color": "white"}); 
					$("#QuitButton").css({"background-color": "green"}); 
					$("#QuitButton").css({"border-color": "white"});
					
					$("#CountDownTimer").css({"color": "white"}); 
					$("#CountDownTimer").css({"background-color": "green"});
					
					$("#ScoreBord").css({"color": "white"}); 
					$("#ScoreBord").css({"background-color": "green"}); 
					
					$("body").css({"background-color":"#003300"}); 
					$("span").css({"color":"white"}); 
					$("h1").css({"border-color":"white"}); 
					
					$("#Uitleg").css({"color":"white"}); 
					$("#Uitleg").css({"background-color":"green"}); 
					$("#Uitleg").css({"border":"solid"}); 
					$("#Uitleg").css({"border-width": "5px"}); 
					$("#Uitleg").css({"border-color":"white"}); 
					
					$("#Winner").css({"color": "white"});
					$("#Winner").css({"background-color":"green"}); 
					$("#Winner").css({"border":"solid"}); 
					$("#Winner").css({"border-width": "5px"}); 
					$("#Winner").css({"border-color":"white"}); 
					
					
					$("#Loser").css({"color": "white"});
					$("#Loser").css({"background-color":"green"}); 
					$("#Loser").css({"border":"solid"}); 
					$("#Loser").css({"border-width": "5px"}); 
					$("#Loser").css({"border-color":"white"}); 
					
					//winner en loser div's hiden
					$("#Winner").css({"visibility": "hidden"});
					$("#Loser").css({"visibility": "hidden"});
			});
			
				//layout basketbal
				$("#BasketbalLayout").click(function() {
					//buttons in basketballen veranderen
					$("Button").text("");
					$("Button").append('<img src="Assets/Images/BasketbalSprite.jpg" height="32" width="32"></img>');
					$("Button").css({'background': 'transparent'});
					$("Button").css({"border": "none"});
					
					//speelveld in Basketveld veranderen
					$("img[src$='Assets/Images/VoetbalveldSprite.png']").remove();
					$("#Speelveld").append('<img src="Assets/Images/BasketbalveldSprite.png" height="' + $("#Speelveld").height() + ' + 70" width="' + $("#Speelveld").width() + ' + 70"></img>'); 
					
					//Kleuren veranderen
					$("#startKnop").css({"color": "black"}); 
					$("#startKnop").css({"background-color": "orange"}); 
					$("#startKnop").css({"border-color": "black"}); 
					
					$("#QuitButton").css({"color": "black"}); 
					$("#QuitButton").css({"background-color": "orange"}); 
					$("#QuitButton").css({"border-color": "black"});
					
					$("#CountDownTimer").css({"color": "black"}); 
					$("#CountDownTimer").css({"background-color": "orange"});
					
					$("#ScoreBord").css({"color": "black"}); 
					$("#ScoreBord").css({"background-color": "orange"}); 
					
					$("body").css({"background-color":"#CC7A00"}); 
					$("span").css({"color":"black"}); 
					$("h1").css({"border-color":"black"}); 
					
					$("#Uitleg").css({"color":"black"}); 
					$("#Uitleg").css({"background-color":"orange"}); 
					$("#Uitleg").css({"border":"solid"}); 
					$("#Uitleg").css({"border-width": "5px"}); 
					$("#Uitleg").css({"border-color":"black"}); 
					
					$("#Winner").css({"color": "black"});
					$("#Winner").css({"background-color":"orange"}); 
					$("#Winner").css({"border":"solid"}); 
					$("#Winner").css({"border-width": "5px"}); 
					$("#Winner").css({"border-color":"black"}); 
					
					
					$("#Loser").css({"color": "black"});
					$("#Loser").css({"background-color":"orange"}); 
					$("#Loser").css({"border":"solid"}); 
					$("#Loser").css({"border-width": "5px"}); 
					$("#Loser").css({"border-color":"black"}); 
					
					//winner en loser div's hiden
					$("#Winner").css({"visibility": "hidden"});
					$("#Loser").css({"visibility": "hidden"});
				})
				
				//layout terug resetten
				$("#BasicLayout").click(function(){
					//buttons terug op basiclayout zetten
					$("img[src$='Assets/Images/VoetbalSprite.jpg']").remove();
					$("img[src$='Assets/Images/BasketbalSprite.jpg']").remove();
					$("#Button1").text("1");
					$("#Button2").text("2");
					$("#Button3").text("3");
					$("#Button4").text("4");
					$("#Button5").text("5");
					$("#Button6").text("6");
					$("#Button7").text("7");
					$("#Button8").text("8");
					$("#Button9").text("9");
					$("#Button10").text("10");
					$("Button").css({"background-color": "red"});
					
					//speelveld op basic layout zetten
					$("img[src$='Assets/Images/VoetbalveldSprite.png']").remove();
					$("img[src$='Assets/Images/BasketbalveldSprite.png']").remove();
					
					
					//Kleuren veranderen
					$("#startKnop").css({"color": "red"}); 
					$("#startKnop").css({"background-color": "black"}); 
					$("#startKnop").css({"border-color": "red"}); 
					
					$("#QuitButton").css({"color": "red"}); 
					$("#QuitButton").css({"background-color": "black"}); 
					$("#QuitButton").css({"border-color": "red"}); 
					
					$("#CountDownTimer").css({"color": "red"}); 
					$("#CountDownTimer").css({"background-color": "black"});
					
					$("#ScoreBord").css({"color": "red"}); 
					$("#ScoreBord").css({"background-color": "black"}); 
					
					$("body").css({"background-color":"#878787"}); 
					$("span").css({"color":"black"}); 
					$("h1").css({"border-color":"black"}); 
			
					$("#Uitleg").css({"color":"red"}); 
					$("#Uitleg").css({"background-color":"black"}); 
					$("#Uitleg").css({"border":"none"}); 
					
					$("#Winner").css({"color": "red"});
					$("#Winner").css({"background-color":"black"}); 
					$("#Winner").css({"border":"none"}); 	
					
					$("#Loser").css({"color": "red"});
					$("#Loser").css({"background-color":"black"}); 
					$("#Loser").css({"border":"none"}); 
					
					//winner en loser div's hiden
					$("#Winner").css({"visibility": "hidden"});
					$("#Loser").css({"visibility": "hidden"});
					
					
				})
				
				//easter egg
			
				$("#wouch").draggable();
				$("#joerei").draggable();
				$("#bersh").draggable();
				$("#jenks").click(function(){
					$(this).css({"visibility":"hidden"});
				});
			
				document.onkeydown = function(e) {
				switch (e.keyCode) {
					case 87: 
						$("#wouch").css({"visibility":"visible"});
					break;
					case 74:
						$("#joerei").css({"visibility":"visible"});
					break;
					case 66:
						$("#bersh").css({"visibility":"visible"});
					break;
					case 13:
						$("#jenks").css({"visibility":"visible"});
					break;
					case 32:
						$("#jenks").css({"visibility":"visible"});
					break;
					}
			};
		});