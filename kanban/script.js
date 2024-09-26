const colunas = document.querySelectorAll('.coluna');

document.getElementById('btnAdicionar').addEventListener('click', () => {
    const coluna = document.querySelector('.coluna');
    coluna.appendChild(criarNovaPosicao());
})

document.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
})

document.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
})

colunas.forEach((item) => {
    item.addEventListener('dragover', (e) => {
        const arrastar = document.querySelector('.dragging');
        const aplicarDepois = pegarNovaPosicao(item, e.clientY);

        if (aplicarDepois) {
            aplicarDepois.insertAdjacentElement('afterend', arrastar);
        } else {
            item.prepend(arrastar);
        }
    })
})

function adicionarIconeLixeira() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        let lixeira = item.querySelector('.trash-icon');
        if (lixeira) {
            lixeira.remove();
        } else {
            lixeira = document.createElement('i');
            lixeira.classList.add('fa-solid', 'fa-trash', 'trash-icon');
            item.appendChild(lixeira);
        };
    });
}
document.getElementById('btnRemover').addEventListener('click', adicionarIconeLixeira);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash-icon')) {
        e.target.parentElement.remove();
    }
});

function criarNovaPosicao(){
    let div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('draggable', 'true');
    div.textContent = 'Card novo';
    return div;
}

function pegarNovaPosicao(coluna, posicaoY) {
    const cartao = coluna.querySelectorAll('.item:not(.dragging)');
    let resultado;

    for (let cartao_referencia of cartao) {
        const box = cartao_referencia.getBoundingClientRect();
        const boxCentroY = box.y + box.height / 2;

        if (posicaoY >= boxCentroY) resultado = cartao_referencia;
    }
    return resultado;
}