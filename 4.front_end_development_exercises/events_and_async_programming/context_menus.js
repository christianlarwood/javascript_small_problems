let main = document.querySelector('main');

main.addEventListener('contextmenu', event => {
  event.preventDefault();
  alert(event.target.tagName);
});