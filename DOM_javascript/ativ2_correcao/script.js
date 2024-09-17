//modo 2

const listaTarefas = [];
const input = document.getElementById('descricaoInput');
const listaDeTarefasDiv = document.getElementById('listaDeTarefas');


function adicionarTarefa () {
    listaTarefas.push(input.value);
    const minhaTarefa = document.createElement('p');
    const span = document.createElement('span');
    span.innerHTML = input.value;
    
    minhaTarefa.appendChild(span);

    const botaoExcluir = document.createElement('button')
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = function () {
        listaDeTarefasDiv.removeChild(minhaTarefa);
    }
    minhaTarefa.appendChild(botaoExcluir);

    const botaoAdd = document.createElement('button')
    botaoExcluir.textContent = 'Concluir';
    botaoAdd.onclick = function () {
        const textDecoration = minhaTarefa.style.textDecoration;
        
        if (textDecoration === 'line-through'){
            minhaTarefa.style.textDecoration = 'none';
        }else {
            minhaTarefa.style.textDecoration = 'line-through';
        }
    }
    minhaTarefa.appendChild(botaoAdd);
    listaDeTarefasDiv.appendChild(minhaTarefa);
}