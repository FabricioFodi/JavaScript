const cadastrar = document.getElementById('cadastrarTarefas');
const consultar = document.getElementById('consultarTarefas');
const atualizar = document.getElementById('atualizarTarefas');
const deletar = document.getElementById('deletarTarefas');

atualizar.addEventListener('click', () => {
    const tarefa = {
        id: 1,
        titulo: 'Estudar JS dois',
        decricao: 'Descrição da segunda tarefa'
    };
    fetch('https://crudcrud.com/api/cfef799bdd594901b41cbdc90f774c3e/todos/66fc7c9cfe837603e816dc62', {
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
    fetch('https://crudcrud.com/api/cfef799bdd594901b41cbdc90f774c3e/todos', {
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
    fetch('https://crudcrud.com/api/cfef799bdd594901b41cbdc90f774c3e/todos', 
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
        _id: '66fc7c9cfe837603e816dc62',
        id: 1,
        titulo: 'Estudar JS',
        decricao: 'Descrição da tarefa'
    };
    fetch('https://crudcrud.com/api/cfef799bdd594901b41cbdc90f774c3e/todos/66fc7c9cfe837603e816dc62', {
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