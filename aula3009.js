const cadastrar = document.getElementById('cadastrarTarefas');
const consultar = document.getElementById('consultarTarefas');
const atualizar = document.getElementById('atualizarTarefas');
const deletar = document.getElementById('deletarTarefas');
const logOriginal = console.log;

atualizar.addEventListener('click', () => {
    const tarefa = {
        _id: '66fbdf4cfe837603e816db59',
        id: 1,
        titulo: 'Estudar JS dois',
        decricao: 'Descrição da segunda tarefa'
    };
    fetch('https://crudcrud.com/api/a94488c22fb64d13bbab01567f215649/todos/66fbe284fe837603e816db65', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    }).then((Response) => {
        console.log(Response);
        return Response.json();
    }).then((Response) => {
        console.log(Response);
    }).catch((error) => {
        console.log(error);
    });
});


document.getElementById('cadastrarTarefas').addEventListener('click', () => {
    const tarefa = {
        id: 1,
        titulo: 'Estudar JS',
        decricao: 'Descrição da tarefa'
    };

    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    // Faz a requisição POST para cadastrar a tarefa
    fetch('https://crudcrud.com/api/a94488c22fb64d13bbab01567f215649/todos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
    .then((Response) => {
        if (!Response.ok) {
            throw new Error('Falha ao cadastrar tarefa');
        }
        return Response.json();
    })
    .then((data) => {
        console.log('Tarefa cadastrada com sucesso:', data);
        
        // Exibe o alerta de sucesso
        successAlert.classList.remove('hidden');
        errorAlert.classList.add('hidden');
        
        // Esconde o alerta automaticamente após 3 segundos
        setTimeout(() => {
            successAlert.classList.add('hidden');
        }, 3000);
    })
    .catch((error) => {
        console.error('Erro ao cadastrar tarefa:', error);

        // Exibe o alerta de erro
        errorAlert.classList.remove('hidden');
        successAlert.classList.add('hidden');
        
        // Esconde o alerta automaticamente após 3 segundos
        setTimeout(() => {
            errorAlert.classList.add('hidden');
        }, 3000);
    });
});


consultar.addEventListener('click', () => {
    fetch('https://crudcrud.com/api/a94488c22fb64d13bbab01567f215649/todos', 
    {
        method: 'GET',
    }
    ).then((Response) => {
        console.log(Response);
        return Response.json();
    }).then((Response) => {
        console.log(Response);
    })
});

deletar.addEventListener('click', () => {
    const tarefa = {
        _id: '66fb2c6dfe837603e816d9e1',
        id: 1,
        titulo: 'Estudar JS',
        decricao: 'Descrição da tarefa'
    };
    fetch('https://crudcrud.com/api/a94488c22fb64d13bbab01567f215649/todos/66fbe284fe837603e816db65', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    }).then((Response) => {
        console.log(Response);
    }).then((Response) => {
        console.log(Response);
    }).catch((error) => {
        console.log(error);
    });
});