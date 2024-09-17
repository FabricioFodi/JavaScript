// Coleções Indexadas

// Objeto Array
// As declarações a seguir criam arrays equivalentes:

// var arr = new Array (elemento0, elemento1, ..., elementoN);
// var arr = Array (elemento0, elemento1, ..., elementoN);
// var arr = [elemento0, elemento1, ..., elementoN];

// var arr = new Array(comprimentoArray);
// var arr = Array(comprimentoArray);

// var arr = [];
// arr.length = comprimentoArray;

var gatos = ['Rex', 'Marco', 'Julio'];
console.log(gatos.length, gatos);

gatos.length = 2;
console.log(gatos.length, gatos);

gatos.length = 0;
console.log(gatos.length, gatos);

gatos.length = 3;
console.log(gatos.length, gatos);

//Iteração em Arrays

var cores = [' ', 'Amar Elu', 'Elo Delo', 'Amarelo', ''];
for(var i = 0; i < cores.length; i++){
    console.log(cores[i]);
} //laço for

var coress = ['Colorido', 'Azulao', 'Roxão', ' '];
coress.forEach(function(cor){
    console.log(cor);
}); //laço forEach 

var coresss = ['Verde', 'Vermelho', 'Rosa', ' '];
coresss.forEach((cor) => {
    console.log(cor);
}); //laço forEach com arrow function

//Métodos de Array


//concat
var meuArray = new Array('1', '2', '3'); // meuArray inicial
meuArray = meuArray.concat('a', 'b', 'c'); // concat() une dois arrays e retorna um novo
console.log(meuArray); // meuArray agora é ["1", "2", "3", "a", "b", "c"]

//join
var meuArray1 = new Array('Vento', 'Chuva', 'Fogo'); // Array1 Inicial
var lista = meuArray1.join(' - '); // adiciona ' - ' depois de cada palavra
console.log('lista: ', lista); // Array agora é "Vento - Chuva - Fogo"

//push
var meuArray2 = new Array('1', '2'); //Array2 Inicial
meuArray2.push('3'); //Adiciona o número 3
console.log(meuArray2); //Array2 agora é ["1", "2", "3"]

//pop
var meuArray3 = new Array('1', '2', '3'); //Array3 Inicial
meuArray3.pop('3'); // Remove o número "3"
console.log(meuArray3); //Array3 agora é ["1", "2"]

//shift
var meuArray4 = new Array('1', '2', '3'); // Array4 Inicial
var primeiro = meuArray4.shift(); // Remove o primeiro elemento do array
console.log(meuArray4) // Array agora é ["2", "3"] 

//unshift
var meuArray5 = new Array('1', '2', '3'); //Array5 Inicial
meuArray5.unshift('4', '5'); // Adicona na frente 
console.log(meuArray5); // Array agora é ['4', '5', '1', '2', '3']