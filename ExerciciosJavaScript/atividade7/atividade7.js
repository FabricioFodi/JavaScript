function adivinheNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"), 10);

    while (tentativa !== numeroAleatorio) {
        tentativa = parseInt(prompt("Tente novamente:"), 10);
    }

    console.log("Parabéns! Você adivinhou o número.");
    alert("Parabéns! Você adivinhou o número.");
}

adivinheNumero();