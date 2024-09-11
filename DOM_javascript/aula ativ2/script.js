/*
Atividade 2: To-Do List
Objetivo: Criar uma página onde o usuário pode adicionar, remover e marcar como concluída uma lista de tarefas.

Instruções:

Crie um formulário com um input de texto onde o usuário pode digitar uma nova tarefa, e um botão "Adicionar".
Assine o evento click do botão para adicionar uma nova tarefa à lista.
Quando o botão for clicado:
Capture o valor do input e adicione esse valor como um item da lista de tarefas.
Cada item da lista deve ser criado dinamicamente no HTML (use createElement para criar novos elementos).
Adicione um botão "Remover" ao lado de cada tarefa, que quando clicado, remova a tarefa da lista.
Adicione um botão "Concluído" ao lado de cada tarefa, que quando clicado, altere o estilo da tarefa para indicar que está concluída 
(por exemplo, usar text-decoration: line-through).
As tarefas devem ser exibidas em uma lista ul ou ol que é preenchida dinamicamente.
Use classes CSS para alterar o estilo dos itens "concluídos" e o botão "Remover".
Dicas:

Use appendChild() para adicionar novos itens à lista.
Use removeChild() para remover itens.
Alterar o estilo de um item pode ser feito diretamente via element.style ou usando classes com classList.add().
*/
const elemento = document.querySelector('body');

elemento.addEventListener('animationend', function() {
    alert("shhh! \uD83E\uDD2B \uD83E\uDDCF");
}); //shhh!


document.getElementById('tarefa').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarNaLista();
    }
}); //usa o Enter como se fosse o botão Adicionar


function adicionarNaLista() {

    let tarefa = document.getElementById('tarefa').value;
    let novaLi = document.createElement('li');
    let btnRemover = document.createElement('button');
    let btnConcluido = document.createElement('button');
    const uLista = document.getElementById('minhaLista');
    //criação de elementos e variaveis

    btnConcluido.classList.add('btnconcluido');
    btnRemover.classList.add('btnremover');
    //estilização dos botões

    if (tarefa.trim() !== "") {
        btnConcluido.innerHTML = "Concluido"
        btnRemover.textContent = "Remover";
        novaLi.textContent = tarefa;
        // adicionando conteúdo aos elementos criados com javascript

        novaLi.appendChild(btnConcluido);
        novaLi.appendChild(btnRemover);
        uLista.appendChild(novaLi);
        //Primeiro adiciona os botões junto as list items, depois adiciona na ul.
    } else {
        alert("Por favor, insira uma tarefa.");
        console.log("Por favo, insira uma tarefa.");
        // Mostra alerta se o input estiver vazio
    }

    document.getElementById('tarefa').value = '';
    //deixa o input vazio depois

    btnConcluido.addEventListener('click', function () {
        novaLi.classList.toggle('completo');
    });
    //quando clica no botão concluido ele risca o texto

    btnRemover.addEventListener('click', function () {
        uLista.removeChild(novaLi);
    });
    //quando clica no botão remover ele remove a linha
}