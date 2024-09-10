function raizQuadradaInteira(numero) {
    let i = 0;
    while (i * i <= numero) {
        i++;
    }
    return i - 1;
}

let numero = prompt("Digite um número inteiro positivo:");
const resultado = raizQuadradaInteira(numero);
console.log('A raiz quadrada inteira de ' + numero + ' é ' + resultado + '.');
alert('A raiz quadrada inteira de ' + numero + ' é ' + resultado + '.');