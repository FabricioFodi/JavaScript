function calculadora() {
    let numero1 = parseFloat(prompt("Insira um número: "));
    let numero2 = parseFloat(prompt("Insira outro número: "));
    let operador = prompt("Informe o operador: ");
    let resultado;

    switch(operador){
        case '+':
            resultado = numero1 + numero2
            break;
        case '-':
            resultado = numero1 - numero2
            break;
        case '*':
            resultado = numero1 * numero2
            break;
        case '/':
            resultado = numero1 / numero2
            break;
        default:
            alert("Operador inválido.")
            console.log("Operador inválido.")
            break;
    }

    alert("Resultado: " + resultado);
    console.log("Resultado: " + resultado);
}

calculadora()