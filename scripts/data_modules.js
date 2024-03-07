const { formatTitle } = require('./helpers');

const dataLetures = [
  'Aula 1 - Entrada, Saída e Processamento',
  'Aula 2 - Variável',
  'Aula 3 - Estrutura Condicional',
  'Aula 4 - Estrutura de Repetição',
  'Recapitulando',
];

const dataModule = formatTitle('Module09 - Lógica de Programação');

module.exports = { dataLetures, dataModule };
