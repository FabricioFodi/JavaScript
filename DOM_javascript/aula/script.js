

const teste = document.getElementById('meuParagrafo');
console.log(teste);

console.log(teste.id);
//teste.classList.add('MinhaClasse');
//console.log("teste.classList", teste.classList);


/*
let contador = 0;

setInterval(() =>{
    teste.innerHTML = '<strong>Contador: </strong>' + contador;
    contador++
}, 1000);
 */

function mudaCor(){
    teste.style.color = (teste.style.color === 'red') ? 'black' : 'red';
    
}

function mouseOver(){
    teste.style.color = 'red';
}

function mouseLeave(){
    teste.style.color = 'black';
}