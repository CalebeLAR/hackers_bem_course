function classMaker(linguage, num) {
  // num = num.toString().padStart(2, '0');

  const title = document.querySelector('.fr-view');
  const topicsNodeList = document.querySelectorAll('strong');
  const topicsTextList = [title.innerText];
  topicsNodeList.forEach((node) => {
    if (node.innerHTML.includes('<br>')) {
      topicsTextList.push(`"${node.innerText}"`);
    }
  });

  if (linguage === 'py') {
    console.log(
      `class Lesson:
          topics = [${topicsTextList.join(',')}]
          practicing = []`
    );
  }
  if (linguage === 'mjs') {
    console.log(
      `export default class Lesson {
            static topics = [${topicsTextList.join(',')}]  
            static practicing = []
        }`
    );
  }
  if (linguage === "t") {
    console.log(`${topicsNodeList.join(',')}`)
  }
}
