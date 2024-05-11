/*
Lucas Farias tem 33 anos, pesa 110 kg
tem 1.7 de altura e seu imc é de 29 e Lucas nasceu em 1991
*/
const nome = 'Lucas';
const sobrenome = 'Farias';
const idade = 33;
const peso = 110;
const altura = 1.77;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome}, tem ${idade} pesa, ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc} e ${nome} nasceu em ${anoNascimento}`);