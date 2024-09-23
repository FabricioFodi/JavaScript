const placa = document.getElementById('placaVeiculo');
const aptNum = document.getElementById('aptNum');
const blocoApt = document.getElementById('blocoApt');
const numVaga = document.getElementById('numVaga');

function ReservarVaga() {

    if (placa.value === '' || aptNum.value === '' || blocoApt.value === '' || numVaga.value === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const vaga = {
        placa: placa.value,
        aptNum: aptNum.value,
        blocoApt: blocoApt.value,
        numVaga: numVaga.value
    };

    //contador par anão sobrescrever as vagas
    let contador = localStorage.getItem('contadorVagas');
    contador = contador ? parseInt(contador) + 1 : 1;

    localStorage.setItem('vaga_' + contador, JSON.stringify(vaga));
    localStorage.setItem('contadorVagas', contador);
    alert("Vaga reservada com sucesso!");

    //limpa os inputs depois de reservar a vaga
    placa.value = '';
    aptNum.value = '';
    blocoApt.value = '';
    numVaga.value = '';
}

function mostrarVagas() {
    const tabelaContainer = document.getElementById('tabelaVagas');
    tabelaContainer.style.display = 'block'; // Exibe a tabela

    let tabelaHTML = `
        <table>
            <tr>
                <th>Placa</th>
                <th>Apartamento</th>
                <th>Bloco</th>
                <th>Vaga</th>
                <th>Ações</th>
            </tr>`;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('vaga_')) {
            const vaga = JSON.parse(localStorage.getItem(chave));

            tabelaHTML += `
                <tr id="${chave}">
                    <td>${vaga.placa}</td>
                    <td>${vaga.aptNum}</td>
                    <td>${vaga.blocoApt}</td>
                    <td>${vaga.numVaga}</td>
                    <td>
                        <button id="btn-editar" onclick="editarVaga('${chave}')">Editar</button>
                        <button id="btn-remover" onclick="removerVaga('${chave}')">Remover</button>
                    </td>
                </tr>`;
        }
    }

    tabelaHTML += '</table>';
    tabelaContainer.innerHTML = tabelaHTML;
}

function removerVaga(chave) {
        localStorage.removeItem(chave);
        mostrarVagas(); // Atualiza a tabela 
}

function editarVaga(chave) {
    const vaga = JSON.parse(localStorage.getItem(chave));

    // Preencher o formulário com os dados da vaga
    document.getElementById('placaVeiculo').value = vaga.placa;
    document.getElementById('aptNum').value = vaga.aptNum;
    document.getElementById('blocoApt').value = vaga.blocoApt;
    document.getElementById('numVaga').value = vaga.numVaga;

    localStorage.removeItem(chave);
}

