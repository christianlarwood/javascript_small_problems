document.addEventListener('DOMContentLoaded', () => {
  let classificationDropdown = document.querySelector('#animal-classifications');
  let animalsDropdown = document.querySelector('#animals');
  let clearButton = document.querySelector('#clear');
  let form = document.querySelector('form');

  function setOptions(array, list) {
    list[0].setAttribute('selected', 'false');
    array.forEach(el => {
      list[el].style.display = 'none';
    });
  }

  classificationDropdown.addEventListener('click', () => {
    let choice = classificationDropdown.value;
    let animals = document.getElementById('animals');
    switch (choice) {
      case 'Vertebrate':
        setOptions([0], animals);
        break;
      case 'Warm-blooded':
        setOptions([0, 2, 4], animals);
        break;
      case 'Cold-blooded':
        setOptions([0, 1, 3, 5], animals);
        break;
      case 'Mammal':
          setOptions([0, 2, 4, 5], animals);
        break;
      case 'Bird':
          setOptions([0, 1, 2, 3, 4], animals);
        break;
    }
  })

  animalsDropdown.addEventListener('click', () => {
    let choice = animalsDropdown.value;
    let classifications = document.getElementById('animal-classifications');
    switch (choice) {
      case 'Bear':
        setOptions([0, 3, 5], classifications);
        break;
      case 'Turtle':
        setOptions([0, 2, 4, 5], classifications);
        break;
      case 'Whale':
        setOptions([0, 3, 5], classifications);
        break;
      case 'Salmon':
          setOptions([0, 2, 4, 5], classifications);
        break;
      case 'Ostrich':
          setOptions([0, 3, 4], classifications);
        break;
    }
  })

  function setDefault(event) {
    event.preventDefault();
    setOptions(['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'], classificationDropdown);
    setOptions(['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'], animalsDropdown);
  }
  clearButton.addEventListener('click', event => {
    setDefault(event);
  });
})