//modo 1

const listaTarefas = [];
const input = document.getElementById('descricaoInput');
const listaDeTarefasDiv = document.getElementById('listaDeTarefas');

function adicionarTarefa() {
    //console.log("valor input: " + input.value); testar se o botão esta funcionando
    listaTarefas.push(input.value);
    //mostraTarefas()
    //modo 2 de fazer, não utiliza o mostraTarefas()
    const meuParagrafo = document.createElement('p');
    meuParagrafo.innerHTML = input.value;
    listaDeTarefasDiv.appendChild(meuParagrafo);
}

function mostraTarefas () {
    listaDeTarefasDiv.innerHTML = '';
    for (let i = 0; i < listaTarefas.length; i++){
        const tarefa = listaTarefas[i];
        //criar o elemento
        listaDeTarefasDiv.innerHTML += `<p>${tarefa}</p>`;
    }
}