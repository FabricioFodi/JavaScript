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
    fetch('https://crudcrud.com/api/a94488c22fb64d13bbab01567f215649/todos', {
        method: 'POST',
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
        console.error(error);
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