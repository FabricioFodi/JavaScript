function inverterString(str) {
    return str.split('').reverse().join('');
}

let input = prompt("Digite a palavra que deseja inverter:");

const resultado = inverterString(input);
console.log('A palavra invertida é: ' + resultado + '.');
alert('A palavra invertida é: ' + resultado + '.');