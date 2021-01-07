function hasMissingInput() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  if (name === '' || email === '') {
    return true;
  }
  return false;
}

let form = document.querySelector('form');
let name;
let email;

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;

    if (hasMissingInput()) {
      alert('Staff can not be created. Check your inputs');
    } else {
      let data = new FormData(form);

      let request = new XMLHttpRequest();
      // request.origin = 'http://localhost:3000/';
      request.open('POST', 'http://localhost:3000/api/staff_members');

      request.addEventListener('load', () => {
        if (request.status === 201) {
          let newId = JSON.parse(request.responseText)['id'];
          alert(`Successfully created staff with id: ${newId}`);
        }
      });

      request.send(data);
    }
  });
});