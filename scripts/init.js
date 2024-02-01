especial_characters = {
  ' ': '_',
  ':': '',
  '-+': '',
  '_-': '',
  '--': '',
  '&': 'e',
  ç: 'c',
  á: 'a',
  à: 'a',
  ã: 'a',
  í: 'i',
  õ: 'o',
  ô: 'o',
  é: 'e',
  '**': '',
};

const formatTitle = (nameDir) => {
  Object.keys(especial_characters).forEach((key) => {
    nameDir = nameDir.replaceAll(key, especial_characters[key]);
  });

  nameDir = nameDir.toLocaleLowerCase();
  return nameDir;
};

let titles = [
  'Para começar',
  'Aula 1 - O que é hacker e seus tipos',
  'Praticando',
  'Aula 2 - Conceito de ética',
  'Praticando',
  'Aula 3 - Profissões em cibersegurança',
  'Praticando',
  'Aula 4 - Conceitos iniciais',
  'Praticando',
  'Aula 5 - Como se proteger',
  'Praticando',
  'Recapitulando',
  'Referências',
  'Créditos',
];

const makeLectures = (title) => {
  let [part01, part02] = title.split(' - ');
  part01 = part01.match(/\d/g).toString().padStart(2, '0');
  result = `lecture${part01} ${part02}`;

  return result;
};

const newTitles = titles.reduce((newTitles, title) => {
  if (title.includes('Aula') && title.includes('-')) {
    title = makeLectures(title);
    title = formatTitle(title);
    newTitles.push(title);
  }

  if (title === 'Recapitulando') {
    title = 'references';
    newTitles.push(title);
  }

  return newTitles;
}, []);

let moduleCourse = formatTitle('module01: **Introdução à Cibersegurança**');
const mkdirModuleCourse = 'mkdir ' + moduleCourse + ' && cd ' + moduleCourse;
const mkdir = mkdirModuleCourse + ' && mkdir ' + newTitles.join(' ');

const touch = newTitles.reduce((touch, title, i) => {
  touch += title + '/Lesson.mjs ';
  return touch;
}, 'touch ');

const gitAdd = newTitles.reduce((acc, title, i) => {
  acc.push('git add ' + title);
  return acc;
}, []).join(' && ');

const gitCommit = newTitles.reduce((acc, title, i) => {
  acc.push('git commit -m ' + title + "'");
  return acc;
}, []).join(' && ');

// console.log(mkdir + ' && ' + touch);
const gitAddCommit = gitAdd + " && " + gitCommit;
console.log(gitAddCommit);
// console.log(newTitles)
