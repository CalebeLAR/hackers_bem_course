function classMaker(linguage, num) {
  num = num.toString().padStart(2, '0');

  const topicsNodeList = document.querySelectorAll('strong');
  const topicsTextList = [];
  topicsNodeList.forEach((node) => {
    if (node.innerHTML.includes('<br>')) {
      arr.push(node.innerText);
    }
  });

  if (linguage === 'py') {
    console.log(
      `class Unit${num}:
          topics = [${topicsTextList.join(',')}]`
    );
  }
  if (linguage === 'mjs') {
    console.log(
      `export default class Unit${num} {
                static topics = [${topicsTextList.join(',')}]
        }`
    );
  }
}
