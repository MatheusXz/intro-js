// let prompt = require('prompt-async')();

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

alunos.forEach(element => {
    console.log(`\n Olá meu nome é ${element.nome} eu nasci ${element.dt_nasc} e sou do sexo ${element.sexo == 'F' ? 'Feminino' : 'Masculino'}\n`);
});

sexoMasculino = m => m.sexo == 'M';
alunosM = alunos.filter(sexoMasculino);
console.log(alunosM);