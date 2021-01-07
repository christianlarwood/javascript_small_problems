function removeHighlight() {
  let highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

// highlights individual article when link is clicked by user
let links = document.querySelectorAll('a');

document.querySelector('ul').addEventListener('click', (event) => {
  let article = event.target.textContent.replace(' ', '-').toLowerCase();
  let matchingArticle = document.getElementById(article);
  removeHighlight();
  matchingArticle.classList.add('highlight');
})

// highlights the main element
document.body.addEventListener('click', () => {
  let main = document.querySelector('main');
  removeHighlight();
  main.classList.add('highlight');
})

// highlight individual article when clicked by user
let articles = document.querySelectorAll('article');

articles.addEventListener('click', (event) => {
  let targetArticle = event.target;
  removeHighlight();
  targetArticle.classList.add('highlight');
})