function fibonacci (){
    let termos = parseInt(prompt("Informe o número de termos: "));  
    let sequencia = [0, 1];

    for(let i = 2; i <= termos; i++){
        sequencia[i] = sequencia[i-1] + sequencia[i-2]
    }
    alert("Resultado: " + sequencia.join(", "));
    console.log("Resultado: " + sequencia.join(", "));
}
fibonacci()