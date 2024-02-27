const { formatTitle } = require('./helpers');

const dataLetures = [
  'Aula 1 - Versões',
  'Aula 2 - Entendendo o file system',
  'Aula 3 - Estrutura dos diretórios',
  'Aula 4 - Criar, remover, apagar',
  'Aula 5 - Criação de usuários e permissões',
  'Aula 6 - Backup pontos e restauração registro',
  'Aula 7 - Instalações de programas pacotes drivers',
  'Recapitulando',
];

const dataModule = formatTitle(
  'Module07 - Utilizar sistemas operacionais - Windows'
);

module.exports = { dataLetures, dataModule };
