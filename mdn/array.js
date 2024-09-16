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

var meuArray = new Array('1', '2', '3'); // meuArray inicial
meuArray = meuArray.concat('a', 'b', 'c'); // concat() une dois arrays e retorna um novo
console.log(meuArray); // meuArray agora é ["1", "2", "3", "a", "b", "c"]