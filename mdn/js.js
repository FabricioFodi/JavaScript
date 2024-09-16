var browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[browserType.length - 1]);
console.log(browserType.indexOf("zilla"));
console.log(browserType.indexOf("vanilla"));
console.log(browserType.slice(2));

var newDateObj = new Date("December 25, 1995");
console.log(newDateObj);
console.log(newDateObj.getMonth());
console.log(newDateObj.getFullYear());

function JSClock(){
    var tempo = new Date();
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    var temp = "" + (hora > 12 ? hora - 12 : hora);
    if (hora == 0) temp = "12";
    temp += (minutos < 10 ? ":0" : ":") + minutos;
    temp += (segundos < 10 ? ":0" : ":") + segundos;
    temp += hora >=12 ? " P.M." : " A.M.";
    
    console.log(temp);

    return temp;
}
console.log(JSClock());

console.log('%c\n           .d88888b.             \n         .8P"     "9bd888b.      \n        .8P     .d8P"   `"988.   \n     .8888   .d8P"    ,     98.  \n   .8P" 88   8"    .d98b.    88  \n  .8P   88   8 .d8P"   "98b. 88  \n  88    88   8P"  `"8b.    "98.  \n  88.   88   8       8"8b.    88 \n   88    "98.8       8   88   "88\n    `8b.    "98.,  .d8   88    88\n    88 "98b.   .d8P" 8   88   d8"\n    88    "98bP"    .8   88 .d8" \n    "8b     `    .d8P"   8888"   \n     "88b.,   .d8P"     d8"      \n       "9888P98b.     .d8"       \n               "988888P"')
