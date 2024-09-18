var a = [4];

for (let i = 0; i < 4; i++){
    a[i] = [4];
    for(let j = 0; j < 4; j++){
        a[i][j] = "(" + i + "," + j + ")";
    }
}
console.log(a);


//localStorage

localStorage.setItem('theme', 'light');
localStorage.setItem('backgroundColor', 'white');
localStorage.setItem('color', '#111');

let keys = Object.keys(localStorage);
for(let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

const settings = {
    backgroundColor: '#fff',
    color: '#111',
    theme: 'light'
};

localStorage.setItem('settings', JSON.stringify(settings));

console.log(localStorage.getItem('settings'));

let storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings);

addEventListener('storage', function(e) {
    console.log(`The value of the ${e.key} changed for the ${e.domain}.`);
});