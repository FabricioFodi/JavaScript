//Closures

var criarPet = function (nome){
    var sexo;

    return{
        setNome: function (novoNome) {
            nome = novoNome;
        },

        getNome: function () {
            return nome;
        },

        getSexo: function () {
            return sexo;
        },

        setSexo: function (novoSexo) {
            if(
                typeof novoSexo == "string" && (novoSexo.toLocaleLowerCase() == "macho" || novoSexo.toLocaleLowerCase() == "fêmea")
            ){
                sexo = novoSexo;
            }
        },
    };
};

var pet = criarPet("Rex");
pet.getNome(); //Rex

pet.setNome("Carlos Maia");
pet.setSexo("macho");
pet.getSexo(); //macho
pet.getNome(); //Carlos Maia



var getCode = (function () { 
var codigoSeguro = "0]Eal(eh&2"; // Um código que 
    //não queremos que pessoas de fora sejam capazes de modificar

    return function () {
        return codigoSeguro;
    };
})();

getCode(); //Retorna o codigoSeguro

// Há, no entanto, uma série de armadilhas que se deve ter cuidado ao
// usar closures. Se uma função fechada define uma variável com o
// mesmo nome de uma variável em um escopo externo, não há nenhuma
// maneira de se referir para a variável em um escopo externo novamente.

var createPet = function (nome) {
    //Função externa define uma variável chamada "nome"
    // 'nome' é declarado, mas seu valor nunca é lido.
    return{
        setNome: function (nome) {
            //Função fechada define uma variável chamada "nome"
            nome = nome; //Como podemos acessar o "nome" que foi definido
            // pela função externa?
        } ,
    };
};