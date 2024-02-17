const { formatTitle } = require('./helpers');

const dataLetures = [
  'Aula 1 - Camada de acesso',
  'Aula 2 - Endereço MAC e tráfego de Dados',
  'Aula 3 - Protocolo ARP',
  'Aula 4 - Endereço IPV4',
  'Aula 5 - IP Público, Privado e NAT',
  'Aula 6 - Subrede',
  'Aula 7 - Super rede',
  'Recapitulando',
];

const dataModule = formatTitle(
  'Module04 - Compreender acesso a rede e camada de internet (IP)'
);

module.exports = { dataLetures, dataModule };
