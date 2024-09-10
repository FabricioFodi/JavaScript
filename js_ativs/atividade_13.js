function contarOcorrencias(){
    let palavra = prompt("Informe uma palavra: ");
    let caracter = prompt("Informe o caracter: ")
    let contador = 0;

    for(let i = 0; i < palavra.length; i++){
        if (palavra[i] === caracter)
            contador++    
    }
    alert(`Existem ${contador} caracteres "${caracter}" na palavra ${palavra}.`);
    console.log(`Existem ${contador} caracteres "${caracter}" na palavra ${palavra}.`);
}

contarOcorrencias()