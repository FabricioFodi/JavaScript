let string = prompt("Digite uma string: ");
let caracter = prompt("Digite um caracter: ");

function contarOcorrencias() {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === caracter) {
            count++;
        }
    }
    return count;
}
const ocorrencias = contarOcorrencias();
console.log('Ocorrencias: ' + ocorrencias); 
alert( 'Ocorrencias: ' + ocorrencias);