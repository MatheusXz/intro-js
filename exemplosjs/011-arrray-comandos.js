let entrada = require('prompt-sync')();

let tarefas = [
  {
    id: 1,
    tarefa: 'Estudar js',
    realizada: false
  },
  {
    id: 2,
    tarefa: 'Estudar BD',
    realizada: false
  },
  {
    id: 3,
    tarefa: 'Dormir',
    realizada: true
  }
];

let opcao = 0;

// FUNCTION
pendentes = p => p.realizada == false;
realizadas = p => p.realizada == true;

do {
  console.log(`

    ---------Programa Iniciado!------------

  LISTA DE TAREFAS
  1 - Listar tarefas pendentes
  2 - Listar tarefas realizadas
  3 - Adicionar tarefa
  4 - Editar tarefa
  5 - Excluir tarefa
  0 - Encerrar`
  );
  opcao = entrada('Selecione uma opção:');

  if (opcao == 1) {
    console.log(tarefas.filter(pendentes));
  }

  if (opcao == 2) {
    console.log(tarefas.filter(realizadas));
  }

  if (opcao == 3) {
    let cont = tarefas.length + 1
    let name = entrada('Nome da Tarefa -> ');
    tarefas.push({
      id: cont++,
      tarefa: name,
      realizada: false
    })
  }

  if (opcao == 4) {
    let opcConcluir = parseInt(entrada(`Deseja alterar a situação de qual ID? `) - 1);
    tarefas[opcConcluir].realizada = true;
  }

  if (opcao == 5) {
    let opcRemove = parseInt(entrada(`Deseja remover qual ID? `) - 1);
    delete tarefas[opcRemove];
    console.log(tarefas.forEach(tarefas => { `ID: ${tarefas.id} - TAREFA: ${tarefas.tarefa} - STATUS ${tarefas.realizada}` }));
  }

} while (opcao != 0);

console.log(`
    ---------Programa encerrado!------------
`);
