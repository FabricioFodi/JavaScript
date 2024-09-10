/*
3) Calcular potência de um número
Instruções:
•	Crie uma função chamada calcularPotencia que recebe dois números via prompt: a base e o expoente.
•	A função deve mostrar o valor de base elevado ao expoente utilizando o alert.
Exemplo:
•	Entrada: 2, 3
•	Resultado esperado: 2 ^ 3 = 8

*/

function calcularPotencia() {

let base = parseInt(prompt("Digite a base: "));
let expoente = parseInt(prompt("Digite o expoente: "));

let resultado = Math.pow(base, expoente);

console.log(`${base} ^ ${expoente} = ${resultado}`);
alert(`${base} ^ ${expoente} = ${resultado}`);
}

calcularPotencia()