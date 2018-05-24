
// Algoritmo 40 - votos

var prompt = require('prompt');
prompt.start();

var i = 0;
var Anaya1 = 0;
var AMLO2 = 0;
var Meade3 = 0;
console.log("Vota por un candidato, escribe sólo su número: Anaya 1, AMLO 2, Meade 3");

do { prompt.get(['voto'], function (err, result) { 
	voto = result.voto
	if (voto == 1){
		Anaya1++;
		i++;
	} else {
		if (voto == 2){
			AMLO2++;
			i++;
		} else {
			if (voto == 3){
				Meade3++;
				i++;
			} else {
				console.log("Estás wey si piensas que ninguno de estos tíos te va a torcer, elije 1, 2 o 3");
			}
			  
		}
	}
	
});
	
} while (i < 10);
console.log("Resultados de la votación. Anaya: "+Anaya1+" votos. AMLO: "+AMLO2+" votos. Meade: "+Meade3+" votos.");
console.log("AMLO dice: Quiero un recuento. Voto x voto. Casilla x casilla.");
