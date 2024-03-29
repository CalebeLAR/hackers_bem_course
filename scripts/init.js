// script para gerar a estrutura de pastas e seus arquivos json.
const { dataLetures, dataModule } = require('./data_modules');
const { formatTitle } = require('./helpers');

const titles = dataLetures
  .filter((title) => title.includes('Aula') || title.includes('Recapitulando'))
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

const commitMessage = `hackers_do_bem.leveling.${dataModule.split('_')[0]}`;
const start = 1;
const end = undefined;

const gitPush = (start, end, commitMessage) => {
  gitAddLectures(start, end);
  console.log(' && ');
  gitCommitLectures(start, end, commitMessage);
};
mkdirModule();
// console.log('*'.repeat(100));
// mkdirLectures();
// console.log('*'.repeat(100));
// touchLectures();
// gitPush(start, end, commitMessage);


