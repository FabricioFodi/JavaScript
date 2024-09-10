// Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

let num1 = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite outro número: "));

function soma(num1, num2) {

    return num1 + num2;

}

console.log(`A soma dos números é: ${soma(num1, num2)}`);
alert(`A soma dos números é: ${soma(num1, num2)}`);

soma(num1, num2);
