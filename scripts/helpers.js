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

module.exports = { formatTitle };
