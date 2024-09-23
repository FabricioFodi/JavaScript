
function calcularPeso(){
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = peso / (altura * altura);
    const teste = document.getElementById('paragrafo');

    if(resultado <= 18.5){
        teste.innerHTML = `Seu IMC é: ${resultado} (Abaixo do Peso)`;
        teste.style.color = 'yellow';
    }else if(resultado < 18.6 || resultado <= 24.9){
        teste.innerHTML = `Seu IMC é: ${resultado} (Peso Ideal)`;
        teste.style.color = 'green';
    }else if (resultado >= 25){
        teste.innerHTML = `Seu IMC é: ${resultado} (Acima do Peso)`;
        teste.style.color = 'red';
    }
}

