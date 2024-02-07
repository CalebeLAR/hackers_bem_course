// script para gerar a estrutura de pastas e seus arquivos json.
const { dataLetures, dataModule } = require('./data_modules');

const formatTitle = (title) => {
  title = title.toLowerCase();
  title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  title = title.replace(/\b(\d)\b/g, '0$1');
  title = title.replace(' - ', ' ');
  title = title.replace('/', ' ');
  title = title.replace(/[,.-]/g, '');
  title = title.replace('aula ', 'lecture');
  title = title.replace(/\s/g, '_');
  title = title.replace(/ç/g, 'c');
  return title;
};

const titles = dataLetures
  .filter((title) => title.includes('Aula'))
  .map((title) => formatTitle(title));

titles.push(`lecture0${titles.length}_conclusao`);

// fução mkdir que gera a estrutura de pastas
const makeModule = () => {
  console.log(`mkdir ${formatTitle(dataModule)}`);
};

const makeDirs = () => {
  console.log(`mkdir ${titles.join(' ')}`);
};

const makeLectures = () => {
  console.log(`touch ${titles.join('/notes.json ')}/notes.json`);
};

const commitLectures = (start, end, message) => {
  console.log(`git add ${titles.join('/notes.json && git add ')}`);
};


// makeModule();
// console.log('*'.repeat(100));
// makeDirs()
// console.log('*'.repeat(100));
// makeLectures();
console.log('*'.repeat(100));
commitLectures(4, 5);
