// Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. 
// Imprima cada propriedade no console.

let livro = {
    nome: prompt("Informe o Nome do livro: "),
    autor: prompt("Nome do autor: "),
    pagina: prompt("Número de páginas: "),
    mostrar: function mostrarLivro(){
        console.log(`Nome: ${this.nome}\nAutor: ${this.autor}\nNúmero de páginas: ${this.pagina}`)
        alert(`Nome: ${this.nome}\nAutor: ${this.autor}\nNúmero de páginas: ${this.pagina}`)
    }
};

livro.mostrar()