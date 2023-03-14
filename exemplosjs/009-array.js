// let prompt = require('prompt-async')();

let notas = [9, 5, 6, 7];
let notasConvertidas = [];
notas.forEach(function (el) {
    if (el >= 8.5) {
        console.log(`Nota ${el}`);
        notasConvertidas.push('MB');
    } else if (el < 8.5) {
        console.log(`Nota ${el}`);
        notasConvertidas.push('B');
    } else if (el <= 4){
        console.log(`Nota ${el}`);
        notasConvertidas.push('R');
    }
})

console.log(`\nNotas convertidas : ${notasConvertidas}\n`)

let alunos = [
    { 
        nome: 'João',
        dt_nasc: '11/10/1980',
        sexo: 'M'
    },
    {
        nome: 'Maria',
        dt_nasc: '25/01/2005',
        sexo: 'F'
    },
    {
        nome: 'Pedro',
        dt_nasc: '16/07/2000',
        sexo: 'M'
    },
    {
        nome: 'Ana',
        dt_nasc: '06/04/1996',
        sexo: 'F'
    }
];

console.log(`\n Olá meu nome é ${alunos[2].nome} eu nasci ${alunos[2].dt_nasc} e sou do sexo ${alunos[2].sexo == 'F' ? 'Feminino' : 'Masculino'}\n`);