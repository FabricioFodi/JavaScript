/* 
8) Cálculo de Média Ponderada
Instruções:
•	Crie uma função chamada calcularMediaPonderada que recebe dois arrays de números (notas e pesos) via prompt.
•	A função deve calcular a média ponderada e exibir o resultado com alert.
Exemplo:
•	Entrada: [7, 8, 9], [2, 3, 5]
•	Resultado esperado: 8.2
*/

function calcularMediaPonderada() {
    let notas = [];
    let pesos = [];
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < 3; i++) {
        notas.push(parseInt(prompt("Digite a nota: ")));
        pesos.push(parseInt(prompt("Digite o peso: ")));
        somaNotas += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }
    console.log(`A média ponderada é ${somaNotas / somaPesos}.toFixed(2)`);
    alert(`A média ponderada é ${somaNotas / somaPesos}.toFixed(2)`);

}

calcularMediaPonderada()