console.log("Hello World");

let nome = 'Matheus'
let idade = 22
let trabalha = true
let altura = 1.87

const coresFavoritas = ['roxo', 'azul', 'preto']
let endereco = {
    logradouro: 'Rua',
    nomeLograd: 'Tal',
    numLograd: '1258-A',
    bairro: 'Centro'
}

let covid = null
let dengue


const nums = [9, 15, 45, 18, 32, 12354, 30, 29];

const alunos = {
    nome: 'Matheus',
    idade: 22,
    notas: [9.6, 5.3, 8.6, 7]
}


console.log(`Meu nome é ${nome} tenho ${idade} minha altura é de ${altura} meu endereço é ${endereco.nomeLograd}`)
console.log(altura)
console.log(nums.filter(n => n >= 30))
console.log(typeof (coresFavoritas))
// console.log(alunos.map(n => n))

const eUmArray = Array.isArray(coresFavoritas);

console.log(eUmArray === true ? `É um array` : `Não é um array`)