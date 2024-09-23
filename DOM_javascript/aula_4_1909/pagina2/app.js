const placaVeiculo = document.getElementById('placaVeiculo');
const nomeProp = document.getElementById('proprietario');
const modeloVeic = document.getElementById('modeloVeiculo');
const corDoVeic = document.getElementById('corVeiculo');

function cadastrarVeiculo() {

    if (placaVeiculo.value === '' || nomeProp.value === '' || modeloVeic.value === '' || corDoVeic.value === '') {
        alert('Informe todos os dados');
        return;
    }

    const cadastroVeiculos = {
        placa: placaVeiculo.value,
        proprietario: nomeProp.value,
        modelo: modeloVeic.value,
        cor: corDoVeic.value
    };

    //contador para não sobrescrever os veículos
    let contador = localStorage.getItem('contadorVeiculos');
    contador = contador ? parseInt(contador) + 1 : 1;

    localStorage.setItem('veiculo_' + contador, JSON.stringify(cadastroVeiculos));
    localStorage.setItem('contadorVeiculos', contador);
    alert('Veículo cadastrado com sucesso!');

    //limpa os inputs depois de cadastrar o veículo
    placaVeiculo.value = '';
    nomeProp.value = '';
    modeloVeic.value = '';
    corDoVeic.value = '';
}

function mostrarVeiculos() {
    const tabelaContainer = document.getElementById('tabelaVeiculos');
    tabelaContainer.style.display = 'block';

    let tabelaHTML = `
        <table>    
            <tr>
                <th>Placa</th>
                <th>Proprietário</th>
                <th>Modelo</th>
                <th>Cor</th>
                <th>Ações</th>
            </tr>`;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('veiculo_')) {
            const veiculo = JSON.parse(localStorage.getItem(chave));

            tabelaHTML += `
                <tr id="${chave}">
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.proprietario}</td>
                    <td>${veiculo.modelo}</td>
                    <td>${veiculo.cor}</td>
                    <td>
                        <button id="btn-editar" onclick="editarVeiculo('${chave}')">Editar</button>
                        <button id="btn-remover" onclick="excluirVeiculo('${chave}')">Remover</button>
                    </td>
                </tr>`;
        }
    }
    tabelaHTML += '</table>';
    tabelaContainer.innerHTML = tabelaHTML;
}

function editarVeiculo(chave) {
    const veiculo = JSON.parse(localStorage.getItem(chave));

    document.getElementById('placaVeiculo').value = veiculo.placa;
    document.getElementById('proprietario').value = veiculo.proprietario;
    document.getElementById('modeloVeic').value = veiculo.modelo;
    document.getElementById('corDoVeic').value = veiculo.cor;

    localStorage.removeItem(chave);
}

function excluirVeiculo(chave) {
    localStorage.removeItem(chave);
    mostrarVeiculos(); //atualiza a lista
}
