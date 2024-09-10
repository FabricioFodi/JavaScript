function contarPares() {
    let inicio = prompt("Digite o valor inicial:");
    let fim = prompt("Digite o valor final:");
    let count = 0;
    
    if (isNaN(inicio) || isNaN(fim)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

const resultado = contarPares();
alert("Quantidade de números pares: " + resultado);
console.log("Quantidade de números pares: " + resultado);