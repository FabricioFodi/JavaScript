const colunas = document.querySelectorAll('.coluna');

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