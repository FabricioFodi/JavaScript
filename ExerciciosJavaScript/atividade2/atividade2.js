function calculadora () {
let numero1 = prompt("Informe o 1º número: ");
let numero2 = prompt("Informe o 2º número:");
let operador = prompt("Informe o operador (+, -, *, /):");
let resultado;

if (numero1 === '' || numero2 === '' || operador === '') {
    alert('Preencha todos os campos.');
    return;
}

switch (operador) {
    case '+':
        resultado = Number(numero1) + Number(numero2);
        break;
    case '-':
        resultado = Number(numero1) - Number(numero2);
        break;
    case '*':
        resultado = Number(numero1) * Number(numero2);
        break;
    case '/':
        resultado = Number(numero1) / Number(numero2);
        break;
    default:
        alert('Operador inválido.');
        return;
}

if (resultado !== null) {
    console.log('Resultado: ' + resultado);
    alert('Resultado: ' + resultado);
}
}

calculadora();