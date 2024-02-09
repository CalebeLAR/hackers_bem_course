const {formatTitle} = require("./helpers")

const dataLetures = [
  'Aula 1 - História da internet',
  'Aula 2 - Tipos de conexão',
  'Aula 3 - LAN_WAN topologias',
  'Aula 4 - Intranet/extranet',
  'Aula 5 - Ativos de rede',
  'Aula 6 - Conectividade',
  'Aula 7 - Par metálico',
  'Aula 8 - Fibra',
  'Aula 9 - Rede sem fio',
  'Recapitulando',
];

const dataModule = formatTitle('Módule03 - Compreender Internet e Camada de acesso a rede');

module.exports = { dataLetures, dataModule };
