let prompt = require('prompt-sync')();

// let seuNome = prompt("Digite seu nome: ");
// let valor1 = parseFloat(prompt("valor 1: "));
// let valor2 = parseFloat(prompt("valor 2: "));

apresentar = nome => nome.split(['']);

function add(a, b) {
    return a + b;
}

data = _ => {
    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed);
    console.log('Hoje é: ' + hoje.toString());
}


caracterAleatorio = _ => {
    const caracterAleatorio = 'QWERTYUIOPASDFGHJKL1234567890qwertyuiopásdfghjklçzxcvbnm,ÇZXCVBNNM';
    const nAleatorio = Math.floor(Math.random() * (caracterAleatorio.length - 1) + 1);
    const caracterApresentado = caracterAleatorio.charAt(nAleatorio);
    return caracterApresentado;
}

// console.log(add(valor1, valor2))
// console.log(apresentar(seuNome))

data();
console.log(caracterAleatorio());