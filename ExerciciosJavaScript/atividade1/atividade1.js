function verificarParOuImpar() {
    let numero = prompt("Informe um número: ");

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        console.log("Entrada inválida.");
        return;
    }

    if (numero % 2 === 0) {
        alert("O número é par.");
        console.log("O número é par.");
    } else {
        alert("O número é ímpar.");
        console.log("O número é ímpar.");
    }
}

verificarParOuImpar();
