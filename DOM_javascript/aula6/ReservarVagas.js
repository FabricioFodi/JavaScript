const placa = document.getElementById('placaVeiculo');
const aptNum = document.getElementById('aptNum');
const blocoApt = document.getElementById('blocoApt');
const numVaga = document.getElementById('numVaga');

const botaoCadastrar = document.getElementById('reservarVaga');
const botaoConsultar = document.getElementById('mostrarVagas');

localStorage.getItem('isLogged') === 'true' ? null : window.location.href = './LoginPage.html';

botaoCadastrar.addEventListener('click', () => {
    const vaga = {
        id: 1,
        placa: placa.value,
        aptNum: aptNum.value,
        blocoApt: blocoApt.value,
        numVaga: numVaga.value
    };
    fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/vagas',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(vaga)
    }).then((Response) => {
        console.log(Response);
        return Response.json();
    }).then((Response) => {
        console.log('Vaga Criada:', Response);
    }).catch((error) => {
        console.error(error);
    });

    placa.value = '';
    aptNum.value = '';
    blocoApt.value = '';
    numVaga.value = '';
});

function mostrarVagas() {
botaoConsultar.addEventListener('click', () => {
    const tabelaContainer = document.getElementById('tabelaVagas');
    tabelaContainer.style.display = tabelaContainer.style.display === 'block' ? 'none' : 'block';

    fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/vagas', 
    {
        method: 'GET',
    }
    ).then((Response) => {
        return Response.json();
    }).then((vagas) => {
        let tabelaHTML = `
        <table>
            <tr>
                <th>Placa</th>
                <th>Apartamento</th>
                <th>Bloco</th>
                <th>Vaga</th>
                <th>Ações</th>
            </tr>`;
        
        vagas.forEach(vaga => {
            let chave = vaga._id;
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
        });

        if(!vagas.length) {
            tabelaHTML += `
            <tr>
                <td>Vazio</td>
                <td>Vazio</td>
                <td>Vazio</td>
                <td>Vazio</td>
                <td>Vazio</td>
            </tr>`;
        }

        tabelaHTML += `</table>`;
        tabelaContainer.innerHTML = tabelaHTML;
    }).catch((error) => {
        console.error(error);
    });
});
}
mostrarVagas();

function removerVaga(chave) {
    fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/vagas/${chave}`, {
        method: 'DELETE'
    }).then((Response) => {
        console.log(Response);
        return mostrarVagas(); 
    }).catch((error) => {
        console.error(error);
    });
}

function editarVaga(chave) {
    // Fazer um GET para obter os dados da vaga correspondente
    fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/vagas/${chave}`, {
        method: 'GET'
    }).then(response => response.json())
    .then(vaga => {
        // Preencher os campos de edição com os dados obtidos
        document.getElementById('placaVeiculo').value = vaga.placa;
        document.getElementById('aptNum').value = vaga.aptNum;
        document.getElementById('blocoApt').value = vaga.blocoApt;
        document.getElementById('numVaga').value = vaga.numVaga;

        // Armazenar a chave da vaga que está sendo editada no botão de cadastro
        document.getElementById('reservarVaga').setAttribute('data-chave', chave);
        return fetch(`https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/vagas/${chave}`, {
            method: 'DELETE'
        });
    })
    .then(response => {
        console.log('Vaga deletada:', response);
        mostrarVagas();
    }).catch(error => {
        console.error(error);
    });
}

