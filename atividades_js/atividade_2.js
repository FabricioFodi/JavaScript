/*

2) Contar letras em uma string
Instruções:
•	Crie uma função chamada contarLetras que recebe uma string via prompt.
•	A função deve mostrar o número de letras (ignorando espaços) utilizando o alert.
Exemplo:
•	Entrada: "Olá Mundo"
•	Resultado esperado: 8

*/
function contarLetras() {
    let string = prompt("Digite uma frase: ")
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            string = string.replace(" ", "")
        }
    }
    console.log("Tamanho da String:" + string.length)
    alert("Tamanho da String: " + string.length)
}

contarLetras()