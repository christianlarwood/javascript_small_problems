// adds a 'click' event listener to the `html` element which will hide the element with id 'container'
document.querySelector('html').addEventListener('click', (event) => {
  let container = document.querySelector('#container');
  
  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});

// what I think is happening here is that when the HTML element is clicked, anywhere, it will hide the container element, but if the container element is clicked, nothing will happen because of stopPropagation