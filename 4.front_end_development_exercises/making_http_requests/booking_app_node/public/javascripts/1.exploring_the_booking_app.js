// how many staff are there?
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/staff_members');
request.responseType = 'json';

request.addEventListener('load', () => {
  console.log(request.response.length); // 5
});

request.send();

// how many students are there?
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/students');
request.responseType = 'json';

request.addEventListener('load', () => {
  console.log(request.response.length); // 5 
  console.log(request.response);
});

request.send();

// how many schedules exist?
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/schedules');
request.responseType = 'json';

request.addEventListener('load', () => {
  console.log(request.response); // 9
  console.log(request.response.length); // 9
});

request.send();

// how many schedules have bookings?
// this is determined by counting the number of schedules with an email address
let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/schedules');
request.responseType = 'json';

request.addEventListener('load', () => {
  let data = [...request.response];
  let bookings = 0;
  data.forEach(obj => {
    if (obj.student_email) {
      bookings += 1;
    }
  });
  console.log(bookings); // 3
})

request.send();
// Do all staff have schedules?
// there is no route that will provide this information

// do all students book a schedule?
// there is no route that will provide this information