var prompt = require('prompt');
prompt.start();
console.log('Solicitud de información laboral del cliente');
console.log('Estimado cliente, apreciamos su interés para la contratación de servicios de Bancomer. A continuación le solicitaremos una serie de datos para saber si usted es susceptible a obtener un préstamo de nómina Bancomer.');


console.log('Por favor indique el nombre y la razón social de la empresa en la que labora actualmente:');
let nombreEmpresa = true;
let razonSocial = true;

prompt.get['nombreEmpresa'], function (err, result)
nombreEmpresa ? console.log('OK') : console.log('Vuelve a introducir el dato');

prompt.get['razonSocial'], function (err, result)
razonSocial ? console.log('OK') : console.log('Vuelve a introducir el dato');

console.log('Por favor escriba su RFC:');
let rfc = true;

prompt.get(['rfc'], function (err, result) 
rfc ? console.log('OK') : console.log('Vuelve a introducir el dato');

let salario = true;
console.log('Por favor indique el salario mensual que percibe actualmente:');
prompt.get['salario'],function (err, result)
salario ? console.log('OK') : console.log('Vuelve a introducir el dato');

let fechaIngreso = true;
console.log('Escriba la fecha de ingreso a su actual empleo:');
prompt.get['fechaIngreso'],function (err, result)
fechaIngreso ? console.log('OK') : console.log('Vuelve a introducir el dato');


console.log('Gracias por su información. A continuación validaremos sus datos y le estaremos informando próximamente si su préstamo fue aprobado.');
