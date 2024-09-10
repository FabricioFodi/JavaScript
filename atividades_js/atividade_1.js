/* 

1) Verificar ano bissexto 
Instruções:
•	Crie uma função chamada verificarAnoBissexto que recebe um ano via prompt.
•	A função deve mostrar o texto Ano bissexto se o ano for bissexto e Ano não bissexto caso contrário, utilizando alert.
 Exemplo:
•	Entrada: 2024
•	Resultado esperado: Ano bissexto

*/
function verificarAno() {

    let ano = parseInt(prompt("Informe um ano: "))
    
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        console.log("O ano é bissexto")
        alert("O ano é bissexto")
    }else  {
        console.log("O ano não é bissexto")
        alert("O ano não é bissexto")
    }
}

verificarAno()