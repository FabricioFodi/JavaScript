const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const formCadastro = document.getElementById('cadastro');
const formLogin = document.getElementById('loginUser');

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
