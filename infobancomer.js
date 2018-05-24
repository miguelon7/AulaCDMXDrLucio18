var prompt = require('prompt');
var nombreEmpresa;
var razonSocial;
var rfc;
var salario;
var fechaIngreso;

console.log('Solicitud de información laboral del cliente');
console.log('Estimado cliente, apreciamos su interés para la contratación de servicios de Bancomer. A continuación le solicitaremos una serie de datos para saber si usted es susceptible a obtener un préstamo de nómina Bancomer.');
console.log('Por favor indique el nombre y la razón social de la empresa en la que labora actualmente:');
prompt.start();
prompt.get(['nombreEmpresa','razonSocial'], function (err, result){
console.log(`Nombre de Empresa: ${nombreEmpresa}`);
console.log(`Razón social: ${razonSocial}`);
});

console.log('Por favor escriba su RFC:');
prompt.get(['rfc'], function (err, result) {
console.log(`RFC: ${rfc}`);
});

console.log('Por favor indique el salario mensual que percibe actualmente:');
prompt.get(['salario'], function (err, result) {
console.log(`Salario: ${salario}`);
});

console.log('Escriba la fecha de ingreso a su actual empleo:');
prompt.get(['fechaIngreso'], function (err, result) {
console.log(`Fecha de ingreso: ${fechaIngreso}`);
});
console.log('Gracias por su información. A continuación validaremos sus datos y le estaremos informando próximamente si su préstamo fue aprobado.');
