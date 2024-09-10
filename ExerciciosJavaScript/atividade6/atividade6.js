function somaAte(n) {
    let sum = 0;
    let i = 1;
    
    while (i <= n) {
        sum += i;
        i++;
    }
    
    return sum;
}

let input = prompt('Insira um número:');
const numero = parseInt(input, 10); // Converte a entrada para um número inteiro
if (!isNaN(numero)) {
    const resultado = somaAte(numero);
    console.log('A soma de 1 até ' + numero + ' é: ' + resultado);
    alert('A soma de 1 até ' + numero + ' é: ' + resultado);
} else {
    alert('Por favor, insira um número válido.');
}