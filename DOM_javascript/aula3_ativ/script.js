const email = document.getElementById('emailInput');
const nome = document.getElementById('nomeInput');
const senha = document.getElementById('senhaInput');


function cadastrarUsuario() {   

    let regex = /^\d{4,8}$/;

    if(email === '' || nome === '' || !regex.test(senha.value)){
        alert('Erro no cadastro!');     
    }else{
        const pessoa = {
            id: 1,
            email: email.value,
            nome: nome.value,
            senha:  senha.value
        };
        localStorage.setItem('pessoa', JSON.stringify(pessoa));
        alert('Cadastro Concluído');
        email.value = '';
        nome.value = '';
        senha.value = '';
    }
}
  