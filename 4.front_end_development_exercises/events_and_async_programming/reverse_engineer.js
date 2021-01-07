document.querySelector('html').addEventListener('click', (event) => {
  if (event.target.querySelector('#container').hasAttribute('[id="container"]')) {
    return;
  }
  document.querySelector('#container').style = 'display: none';
});

// document.querySelector('#container').addEventListener('click', event => {
//   event.stopPropagation();
// });