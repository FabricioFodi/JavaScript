/*
5) Gerar tabuada
Instruções:
•	Crie uma função chamada gerarTabuada que recebe um número via prompt.
•	A função deve exibir a tabuada desse número de 1 a 10 utilizando o alert.
Exemplo:
•	Entrada: 7
•	Resultado esperado:
o	7 * 1 = 7
o	7 * 2 = 14
o	...
o	7 * 10 = 70
*/


function gerarTabuada (){
    let tabuada = parseInt(prompt("Digite um número para gerar a tabuada: "))

    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
        alert(`${tabuada} x ${i} = ${tabuada * i}`);
    }
}

gerarTabuada()