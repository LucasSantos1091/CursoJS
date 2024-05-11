/** 
 * Aritmeticos
 * + adiçao / concatenaçao (-/*)
 * ** potenciaçao 
 * % Resto da divis
 * *= ; + += Operadores de atribuiçao
 * 
 */

const num1 = 10;
const num2 = 5;

console.log((num1 + num2) * num1);
//incrementp
let contador = 1;
contador++; // 2
contador++; //3
console.log(contador);
//decremento
let contador2 = 10;
contador2--; // 2
contador2--; //3
console.log(contador2);

let contador3 = 2;
contador3 *= 21;
console.log(contador3);
// NaN - Not a number
const num3 = 10;
const num4 = parseInt('5'); // parse converte string em number 
const num5 = parseFloat('5.3'); // parsefloat convert string para float
const num6 = Number('5.69'); //Number convert para qualquer tipo numerico, tanto number quanto float
console.log(num3 + num4 + num5 + num6);