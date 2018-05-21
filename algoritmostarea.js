
// Algoritmo 7 par -impar
var x = prompt("Teclea un número");
undefined
if ( x % 2 == 0){
    resultado = "Es par";
} else {
    resultado = "Es impar";
}
alert(resultado);



//Algoritmo 3- sueldo
var nombre = prompt("Escribe tu nombre");
var n_hrs = prompt("Escribe el numero de horas laboradas");
var pago_hr = 50.3;
var sueldo =(n_hrs * pago_hr);
alert(nombre+" $"+sueldo);






//Algoritmo 8 - suma de tres enteros
var n1 = parseInt(prompt("Dame un número"));
var n2 = parseInt(prompt("Dame otro número"));
var n3 = parseInt(prompt("Dame un tercer número"));
var suma = n2 + n3;
if (suma == n1){
	alert(n1+" = a la suma de "+n2+" + "+n3);
} else {
	suma = (n1 + n3);
	if (suma == n2){
		alert(n2+" = a la suma de "+n1+" + "+n3)	
  	}else {
		suma = (n1 + n2);
		if (suma == n3){
			alert(n3+" = a la suma de "+n1+" + "+n2);
        }else {
        	alert("Ningún número es la suma de los otros dos");
		}
	}	
}