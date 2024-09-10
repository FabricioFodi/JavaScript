/*
4) Soma dos dígitos de um número
Instruções:
•	Crie uma função chamada somaDigitos que recebe um número inteiro via prompt.
•	A função deve mostrar a soma de seus dígitos utilizando o alert.
Exemplo:
•	Entrada: 1234
•	Resultado esperado: 1 + 2 + 3 + 4 = 10

*/

function somaDigitos() {
    let numero = prompt("Digite um número: ");
    let soma = 0;

    for (let i = 0; i < numero.length; i++) {
        soma += parseInt(numero[i]); 
    }
    console.log(`A soma dos dígitos de ${numero} é: ${soma}`);
    alert(`A soma dos dígitos de ${numero} é: ${soma}`);
}

somaDigitos();
