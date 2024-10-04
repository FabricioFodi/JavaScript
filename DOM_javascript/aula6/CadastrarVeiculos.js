const placa = document.getElementById('placaVeiculo');
const proprietario = document.getElementById('proprietario');
const modelo = document.getElementById('modeloVeiculo');
const cor = document.getElementById('corVeiculo');

const botaoCadastrar = document.getElementById('cadastrarVeiculo');
const botaoConsultar = document.getElementById('mostrarVeiculos');

localStorage.getItem('isLogged') === 'true' ? null : window.location.href = './LoginPage.html';

botaoCadastrar.addEventListener('click', () => {
    const veiculo = {
        id: 1,
        placa: placa.value,
        proprietario: proprietario.value,
        modelo: modelo.value,
        cor: cor.value
    };
    fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/veiculos',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(veiculo)
    }).then((Response) => {
        console.log(Response);
        return Response.json();
    }).then((Response) => {
        console.log('Veículo Cadastrado:', Response);
    }).catch((error) => {
        console.error(error);
    });

    placa.value = '';   
    proprietario.value = '';
    modelo.value = '';
    cor.value = '';
});

function mostrarVeiculos() {
    botaoConsultar.addEventListener('click', () => {
        const tabelaContainer = document.getElementById('tabelaVeiculos');
        tabelaContainer.style.display = tabelaContainer.style.display === 'block' ? 'none' : 'block';

        fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/veiculos', {
            method: 'GET'
        }).then((Response) => {
            return Response.json();
        }).then((veiculos) => {
            let tabelaHTML = `
            <table>
                <tr>
                    <th>Placa</th>
                    <th>Proprietário</th>
                    <th>Modelo</th>
                    <th>Cor</th>
                    <th>Ações</th>
                </tr>`;
            
            veiculos.forEach(veiculo => {
                let chave = veiculo._id;
                tabelaHTML += `
                <tr id="${chave}">
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.proprietario}</td>
                    <td>${veiculo.modelo}</td>
                    <td>${veiculo.cor}</td>
                    <td>
                        <button id="btn-editar" onclick="editarVeiculo('${chave}')">Editar</button>
                        <button id="btn-remover" onclick="deletarVeiculo('${chave}')">Deletar</button>
                    </td>
                </tr>`;
            });

            if(!veiculos.length) {
                tabelaHTML += `
                <tr>
                    <td>Vazio</td>
                    <td>Vazio</td>
                    <td>Vazio</td>
                    <td>Vazio</td>
                    <td>Vazio</td>
                </tr>
                `
            }

            tabelaHTML += '</table>';
            tabelaContainer.innerHTML = tabelaHTML;
        }).catch((error) => {
            console.error(error);
        });
    });
}
mostrarVeiculos();

function deletarVeiculo(chave) {
    fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/veiculos/${chave}`, {
        method: 'DELETE'
    }).then((Response) => {
        console.log(Response);
    }).then((Response) => {
        console.log('Veículo Deletado:', Response);
    }).catch((error) => {
        console.error(error);
    });
}

function editarVeiculo(chave) {
    fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/veiculos/${chave}`, {
        method: 'GET'
    }).then(Response => Response.json())
    .then(veiculo => {
        document.getElementById('placaVeiculo').value = veiculo.placa;
        document.getElementById('proprietario').value = veiculo.proprietario;
        document.getElementById('modeloVeiculo').value = veiculo.modelo;
        document.getElementById('corVeiculo').value = veiculo.cor;

        document.getElementById('cadastrarVeiculo').setAttribute('data-chave', chave);
        return fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/veiculos/${chave}`, {
            method: 'DELETE'
        });
    }).then(Response => {
        console.log('Carro Deletado', Response);
    }).catch(error => {
        console.error(error);
    });
}