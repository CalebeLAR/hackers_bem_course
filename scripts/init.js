// script para gerar a estrutura de pastas e seus arquivos json.
const { dataLetures, dataModule } = require('./data_modules');
const { formatTitle } = require('./helpers');

const titles = dataLetures
  .filter((title) => title.includes('Aula'))
  .map((title) => formatTitle(title));

// fução mkdir que gera a estrutura de pastas
const mkdirModule = () => {
  console.log(`mkdir ${formatTitle(dataModule)}`);
};

const mkdirLectures = () => {
  console.log(`mkdir ${titles.join(' ')}`);
};

const touchLectures = () => {
  console.log(`touch ${titles.join('/notes.json ')}/notes.json`);
};

const gitAddLectures = (start, end) => {
  const slice = dataLetures.map(formatTitle).slice(start - 1, end);
  console.log(`git add ${slice.join('/notes.json && git add ')}`);
};

const gitCommitLectures = (start, end, message = '') => {
  const slice = dataLetures.slice(start - 1, end);
  try {
    slice.forEach((lecture, i) => {
      const titleLecture = formatTitle(lecture.split(' - ').at(1));
      console.log(
        `git commit -m '${message}.aula0${i + start}.${titleLecture}' &&`
      );
    });
  } catch (e) {
    console.log(`git commit -m '${message}.recaptulando'`);
  }
};

// mkdirModule();
// console.log('*'.repeat(100));
// mkdirLectures();
// console.log('*'.repeat(100));
// touchLectures();

const commitMessage = 'hackers_do_bem.lv.module04';
const start = 5;
const end = 6;

console.log(
  'MODULO NUMERO MODULO NUMERO MODULO NUMERO MODULO NUMERO MODULO NUMERO'
);
const gitPush = (start, end, commitMessage) => {
  gitAddLectures(start, end);
  console.log(' && ');
  gitCommitLectures(start, end, commitMessage);
};
gitPush(start, end, commitMessage);


git add lecture05_ip_publico_privado_e_nat/notes.json && git add lecture06_subrede && git commit -m 'hackers_do_bem.lv.module04.aula05.ip_publico_privado_e_nat' && git commit -m 'hackers_do_bem.lv.module04.aula06.subrede'
git commit -m 'hackers_do_bem.lv.module04.recap'