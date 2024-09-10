function fibonacci(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
	}
	return fib;
}

function solicitarNumero() {
	let n = parseInt(prompt("Insira um número:"));
	if (isNaN(n)) {
		console.log("Por favor, insira um número válido.");
		alert("Por favor, insira um número válido.");
	} else {
		console.log( 'Resultado: ' + fibonacci(n));
		alert( 'Resultado: ' + fibonacci(n));
	}
}

solicitarNumero();