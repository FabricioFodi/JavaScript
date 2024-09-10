/*
7) Converter Minutos em Horas e Minutos
Instruções:
•	Crie uma função chamada converterMinutos que recebe um número de minutos via prompt.
•	A função deve converter esse valor de minutos em horas e minutos, exibindo o resultado com alert.
Exemplo:
•	Entrada: 135
•	Resultado esperado: 2 horas e 15 minutos
*/

function converterMinutos() {
    let minutos = parseInt(prompt("Digite um número de minutos: "));
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    console.log(`${minutos} minutos é igual a ${horas} horas e ${minutosRestantes} minutos`);
    alert(`${minutos} minutos é igual a ${horas} horas e ${minutosRestantes} minutos`);
}

converterMinutos()