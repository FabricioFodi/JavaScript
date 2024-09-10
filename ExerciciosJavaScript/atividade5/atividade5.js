function verificarPalindromo(str) {
	// Remover caracteres não alfanuméricos e converter para minúsculas
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	
	// Verificar se a string é igual à sua versão invertida
	const reversedStr = cleanedStr.split('').reverse().join('');
	return cleanedStr === reversedStr;
}

function solicitarPalavra() {
	let palavra = prompt("Insira uma palavra:");
	if (palavra) {
		const resultado = verificarPalindromo(palavra);
		console.log(`A palavra "${palavra}" é um palíndromo? ${resultado ? 'Sim' : 'Não'}`);
		alert(`A palavra "${palavra}" é um palíndromo? ${resultado ? 'Sim' : 'Não'}`);
	} else {
		console.log("Por favor, insira uma palavra válida.");
		alert("Por favor, insira uma palavra válida.");
	}
}

// Chama a função para solicitar a palavra ao usuário
solicitarPalavra();