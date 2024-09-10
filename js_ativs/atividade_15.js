function verificarPalindromo() {
    let palavra = prompt("Informe uma palavra: ");
    let strLimpa = palavra.toLocaleLowerCase();
    let stringInvertida = strLimpa.split('').reverse().join('');

    strLimpa === stringInvertida ? (console.log("É palindromo!"), alert("É palindromo!")) : (console.log("Não é Palindromo!"), alert("Não é palindromo"));
    

}
verificarPalindromo()