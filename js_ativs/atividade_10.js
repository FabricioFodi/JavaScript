document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // faz a conversão para json
    .then(data => {
      const outpuDiv = document.getElementById('output');
      outpuDiv.innerHTML = '';
      data.forEach(post => {
        const postElement = document.createElement('p');
        postElement.textContent = `ID: ${post.id} - Título: ${post.title}`;
        outpuDiv.appendChild(postElement);
      });  
    })
    .catch(error => {
        console.error('Erro ao buscar dados: ', error)
    })
});

/*
<body>
    <h1>Testando Fetch API</h1>
    <button id="fetchData">Buscar Dados</button>
    <div id="output"></div>
    <script src="atividade_10.js"></script>
</body>
*/