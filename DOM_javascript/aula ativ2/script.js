elemento.addEventListener('animationend', function() {
    alert("shhh! \uD83E\uDD2B \uD83E\uDDCF");
}); //shhh!

const elemento = document.querySelector('body');

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
        btnConcluido.innerHTML = "Concluido";
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