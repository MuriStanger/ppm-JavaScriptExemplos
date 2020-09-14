var booleana = true;
console.log(booleana);

booleana = false;
console.log(booleana);
console.log(typeof(booleana));

booleana = !booleana;
console.log(booleana);

//----------------------------------------------

var numero = 1;
console.log(numero);
console.log(typeof(numero));

numero = -1;
console.log(numero);
console.log(typeof(numero));

numero = Math.PI;
console.log(numero);
console.log(typeof(numero))
var n1 = 10;
var n2 = 20;
console.log('SOMA: ', n1 + n2);
console.log('SUBTRAIR: ', n1 - n2);
console.log('MULTIPLICACAO: ', n1 * n2);
console.log('DIVISAO: ', n1 / n2);

console.log('Potência n1 elevado a n2: ', Math.pow(2, 5))
console.log('Raiz quadrada de 25: ', Math.sqrt(25))

var pi = Math.PI;
var numeroRandomico = Math.random() * 100;

console.log('Número randomico  (max. 100: ', Math.random() * numeroRandomico)
console.log('Número randomico  (max. 100: ', Math.random() * Math.floor(numeroRandomico));
console.log('Número randomico  (max. 100: ', Math.random() * Math.trunc(numeroRandomico));
console.log('Número randomico  (max. 100: ', Math.random() * Math.round(numeroRandomico));

// ------------------------------------------

var texto = 'texto';
console.log(texto);
console.log(typeof(texto))

var texto = "texto";
console.log(texto);
console.log(typeof(texto))

texto = 'c';
console.log(texto);
console.log(typeof(texto))

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

texto = '               texto           ';
console.log(texto);
console.log(texto.trim());

texto = 'texto';
console.log(texto.startsWith('tex')); // ver o comeco do arquivo
console.log(texto.endsWith('to')); // ver o final do arquivo
console.log(texto.search('x')); // retorna a posicao q a letra esta na var;
console.log(texto.indexOf('x'));
console.log(texto.includes('x'));
console.log(texto.charAt(1)); // retorna o char conforme a posicao indicada;
console.log(texto.concat(' texto'));
console.log(texto + ' ' + texto);
//---------------------------------------------

// comentário de uma linha

/* comentário de várias linhas
 */