// Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop

function mostrarArrays(){
    let frutas = []

    for(let i = 0; i < 3; i++){
        frutas.push(prompt("Digite uma Fruta: "));
    }
    console.log("Frutas: " + frutas)
    alert("Frutas: " + frutas)

}

mostrarArrays()