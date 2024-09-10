function verificaParImpar () {
let numero = parseInt(prompt("Informe um número: "));

numero % 2 === 0 ? (console.log("Este número é par!"), alert("Este número é par!")): (console.log("Este número é impar!"), alert("Este número é impar!"))};

verificaParImpar()