const input = document.querySelector('input');
const botao = document.querySelector('button');
const img = document.querySelector('img');

const cidade = document.querySelector('#cidade');
const temperatura = document.querySelector('#temperatura');
const conteudo = document.querySelector('.conteudo');


document.getElementById('local').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        getWeatherData();

    }
});

botao.addEventListener('click', () => {
    if (!input.value) return;
    getWeatherData();
});

async function getWeatherData() {
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=d37870889ac0283f2aaa23af2bbf8ef1`;
    if (!input.value) {
        alert('Digite uma cidade!');
    } else {
        try {
            await fetch(urlApi)
                .then((res) => res.json())
                .then((data) => {
                    if (data?.cod && data.cod === '404') {
                        return alert('Cidade não encontrada');
                    }
                    loadWeatherInfo(data);
                });
        } catch (error) {
            alert(error)
        }
    }
}
function loadWeatherInfo(data) {
    cidade.innerHTML = `${data.name}, ${data.sys.country}`;
    temperatura.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}ºC`;
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    conteudo.computedStyleMap.display = 'flex'

}
