// Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let num1 = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite outro número: "));
let soma = (num1) + (num2);
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log(`A soma dos números é: ${soma}`);
console.log(`A subtração dos números é: ${subtracao}`);
console.log(`A multiplicação dos números é: ${multiplicacao}`);
console.log(`A divisão dos números é: ${divisao}`);
alert(`A soma dos números é: ${soma}`);
alert(`A subtração dos números é: ${subtracao}`);
alert(`A multiplicação dos números é: ${multiplicacao}`);
alert(`A divisão dos números é: ${divisao}`);