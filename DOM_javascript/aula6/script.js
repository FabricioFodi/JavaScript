const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const formCadastro = document.getElementById('cadastro');
const formLogin = document.getElementById('loginUser');
const data = document.getElementById('data');

// Função para formatar a data a cada alteração
data.addEventListener('input', () => {
    let value = data.value.replace(/\D/g, ''); // Remove tudo que não for número
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = value.substring(0, 2); // Dia
    }
    if (value.length >= 3) {
        formattedValue += '/' + value.substring(2, 4); // Mês
    }
    if (value.length >= 5) {
        formattedValue += '/' + value.substring(4, 8); // Ano
    }

    data.value = formattedValue;
});

// Impedir que as barras '/' sejam apagadas diretamente
data.addEventListener('keydown', (event) => {
    let position = data.selectionStart;

    // Verifica se o usuário está tentando apagar a barra '/' com Backspace ou Delete
    if ((event.key === 'Backspace' && data.value[position - 1] === '/') ||
        (event.key === 'Delete' && data.value[position] === '/')) {
        event.preventDefault();

        // Mover o cursor para antes ou depois da barra ao tentar apagar
        if (event.key === 'Backspace') {
            data.setSelectionRange(position - 1, position - 1);
        } else if (event.key === 'Delete') {
            data.setSelectionRange(position + 1, position + 1);
        }
    }
});



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = {
        nome: formCadastro.elements['nome'].value,
        nascimento: formCadastro.elements['nascimento'].value,
        email: formCadastro.elements['email'].value,
        senha: formCadastro.elements['senha'].value
    };

    fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }).then((Response) => {
        return Response.json();
    }).then((usuario) => {
        console.log(usuario);
    }).catch((error) => {
        console.error(error);
    });

    formCadastro.reset();
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = formLogin.elements['email'].value;
    const senhaInput = formLogin.elements['senha'].value;

    fetch('https://crudcrud.com/api/bb70474cbf7748c9b15927e9e5e040a4/usuarios', {
        method: 'GET'
    }).then((Response) => {
        return Response.json();
    }).then((usuarios) => {
        let usuario = usuarios.find(usuario => usuario.email === emailInput && usuario.senha === senhaInput);
        if (usuario) {
            alert('Bem vindo!');
            localStorage.setItem('isLogged', true);
            window.location.href = './ReservarVagas.html';
        } else {
            alert('Usuário ou senha inválidos');
            return;
        }
    }).catch((error) => {
        console.error(error);
    });

    formLogin.reset();
});
