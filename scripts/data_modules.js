const { formatTitle } = require('./helpers');

const dataLetures = [
'Aula 1 - Histórico de Computação em Nuvem',
'Aula 2 - On-premises e Nuvem',
'Aula 3 - Características da Nuvem',
'Aula 4 - Modelos de Implantação em Nuvem',
'Recapitulando'
];

const dataModule = formatTitle('Module01 - Compreender os tipos, modelos e conceitos da computação em nuvem');

module.exports = { dataLetures, dataModule };



