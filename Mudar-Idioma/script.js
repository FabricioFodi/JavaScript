function changeLanguage(lang) {
    var contentDiv = document.getElementById('content');
    var conteudoDiv = document.getElementById('conteudo')
    
    if (lang === 'en') {
        // Conteúdo em inglês
        conteudoDiv.innerHTML = '<h1>Welcome to my website</h1> <h3>Choose your language:</h3> '
        contentDiv.innerHTML = '<p>This is the content of the website in English.</p> <p>Subject to mistranslations</p>';
    } else if (lang === 'es') {
        // Conteúdo em espanhol
        conteudoDiv.innerHTML = '<h1>Bienvenido a mi sitio web</h1> <h3>Elige tu idioma:</h3>'
        contentDiv.innerHTML = '<p>Este es el contenido del sitio web en español.</p> <p>Sujeto a traducciones erróneas</p>';
    } else if (lang === 'br') {
        conteudoDiv.innerHTML = '<h1>Bem-vindo ao Meu Site</h1> <h3>Escolha seu idioma:</h3>';
        contentDiv.innerHTML ='<p>Este é o conteúdo do site em português.</p> <p>Sujeito à traduções erradas</p>';
    }
}
