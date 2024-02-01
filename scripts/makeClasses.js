function classMaker(linguage, num) {
  num = num.toString().padStart(2, '0');

  const topicsNodeList = document.querySelectorAll('strong');
  const topicsTextList = [];
  topicsNodeList.forEach((node) => {
    if (node.innerHTML.includes('<br>')) {
      topicsTextList.push(`"${node.innerText}"`);
    }
  });

  if (linguage === 'py') {
    console.log(
      `class Lesson${num}:
          topics = [${topicsTextList.join(',')}]
          practicing = []`
    );
  }
  if (linguage === 'mjs') {
    console.log(
      `export default class Lesson${num} {
            static topics = [${topicsTextList.join(',')}]  
            static practicing = []
        }`
    );
  }
}
