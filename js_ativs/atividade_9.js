// Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string,
// mas com a primeira letra de cada palavra em maiúsculas.

function capitalizePrimeiraLetra(str) {
    return str
        .split(' ') // Divide a string em um array de palavras
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) // Capitaliza a primeira letra e coloca o restante em minúsculas
        .join(' '); // Junta as palavras novamente em uma string
}

// Testando a função
let frase = prompt("Digite uma frase: ");
let resultado = capitalizePrimeiraLetra(frase);
console.log(resultado); // "Javascript É Muito Legal!"
alert(resultado)
