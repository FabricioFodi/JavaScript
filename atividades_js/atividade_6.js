/*
6) Repetir uma string N vezes
Instruções:
•	Crie uma função chamada repetirString que recebe uma string e um número via prompt.
•	A função deve mostrar a string repetida n vezes utilizando o alert.

Exemplo:
•	Entrada: "Oi", 3
•	Resultado esperado: "OiOiOi"
*/

function repetirString() {
    let string = prompt("Digite uma string: ")
    let numero = parseInt(prompt("Digite um número: "))
    let resultado = string.repeat(numero)

    console.log(resultado)
    alert(resultado)

}

repetirString()