especial_characters = {
  " ": "_",
  ":": "",
  "-+": "",
  "_-": "",
  "--": "",
  "&": "e",
  ç: "c",
  á: "a",
  ã: "a",
  í: "i",
  õ: "o",
  ô: "o",
};

const formatDirName = (nameDir) => {
  Object.keys(especial_characters).forEach((key) => {
    nameDir = nameDir.replaceAll(key, especial_characters[key]);
  });

  // nameDir = 'dia' + nameDir;
  nameDir = nameDir.toLocaleLowerCase();
  return nameDir;
};

const getDay = (numPages, e, nameDir) => {
  let day = formatDirName(nameDir);
  day = `mkdir ${day} && cd ${day} && `;

  mkdir = "mkdir ";
  touch = "touch ";

  for (let i = 1; i <= numPages; i++) {
    if (i < 10) {
      mkdir += `segment0${i} `;
      touch += `segment0${i}/Unit0${i}.${e} `;
    } else {
      mkdir += `segment${i} `;
      touch += `segment${i}/Unit${i}.${e} `;
    }
  }

  return day + mkdir + "&& " + touch;
};

const commitDays = (pageI = 1, pageF, e, message) => {
  gitAdd = "";
  gitCommit = "";
  command = [];

  for (let i = pageI; i <= pageF; i++) {
    if (i < 10) {
      gitAdd = `git add segment0${i}/`;
      gitCommit = `git commit -m '${message}.Unit0${i}c.${e}'`;
    } else {
      gitAdd = `git add segment${i}/`;
      gitCommit = `git commit -m '${message}.Unit${i}c.${e}'`;
    }

    command.push(`${gitAdd} && ${gitCommit}`);
  }
  return command.join(" && ");
};

const modul = "fundamentos";
const section = "seção06";
const day = "dia02: Primeiros passos em Jest";

const units = 5;
const extension = "mjs";

const commit = `trybe.${modul}.${section}.${day.split(":")[0]}`;

var comand = getDay(units, extension, day);
console.log(comand);

console.log("*".repeat(100));
var comand = commitDays(1, units, extension, commit);
console.log(comand);
