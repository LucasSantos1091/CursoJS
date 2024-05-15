// strings
let umastring = "um texto";

console.log(umastring.concat(' um lindo dia'));
console.log(umastring + ' um lindo dia');
console.log(`${umastring} um lindo dia`);

//encontrando indice
console.log(umastring.indexOf('texto'));
console.log(umastring.lastIndexOf('m'));
console.log(umastring.replace('m', 'h')); // substitui letra por outra

let outraString = 'O rato roel a roupa do rei de roma';

console.log(outraString.length); // tamanho da string
console.log(outraString.slice(2, 6)); // busca posicaao correta
console.log(outraString.slice(-5)) // negativo pega da ultima posiçao de index pra frente Ex slice(-3) = 34(tamanho da string) - 3 seria 31 a posicao
console.log(outraString.substring(outraString.length - 5, outraString.length - 1)); // usando o exemplo com substring
console.log(outraString.split('r'));

// fontos w3schools e MDN mozzilas