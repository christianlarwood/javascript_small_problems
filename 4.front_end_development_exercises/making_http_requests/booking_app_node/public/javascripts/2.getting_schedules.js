function getSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;

  request.addEventListener('load', () => {
    let currentSchedule = JSON.parse(request.response);
    let scheduleTally = {};
    
    currentSchedule.forEach(obj => {
      if (!obj.student_email) {
        if (scheduleTally[obj.staff_id]) {
          scheduleTally[obj.staff_id] += 1;
        } else {
          scheduleTally[obj.staff_id] = 1;
        }
      }
    })
    console.log(scheduleTally);
  })
  

  request.send();
}

getSchedules();

let retrieveSchedules = (function() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');

  request.responseType = 'json';
  // request.timeout = 5000; 

  request.addEventListener('load', () => {
    let tally = {};
    let schedule = request.response;
    console.log(schedule);
    schedule.forEach(obj => {
      if (!obj.student_email) {
        if (Object.keys(tally).includes(String(obj.staff_id))) {
          tally[obj.staff_id] += 1;
        } else {
          tally[obj.staff_id] = 1;
        }
      };
    });
    if (Object.keys(tally).length > 0) {
      console.log(tally);
      console.log('Your request was successfully completed!');
    } else {
      console.log('There are no available schedules for booking.');
    };
  })

  // request.ontimeout = function(e) { console.log('The request timed out. Please try aggain.') };

  request.send();
})();

function retrieveScheduless() {
  const request = new XMLHttpRequest();

  // Be sure to change your host and port number accordingly
  request.open('GET','http://localhost:3000/api/schedules')
  // request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', event => {
    const schedules = request.response;
    const staffs = [];
    const tally = [];
    console.log(schedules);

    if (schedules.length > 0) {
      schedules.forEach(({staff_id}) => {
        const key = `staff ${String(staff_id)}`;
        if (!staffs.includes(key)) {
          staffs.push(key);
          tally.push(1);
        } else {
          tally[staffs.indexOf(key)] += 1;
        }
      });

      alert(tally.map((_, index) => `${staffs[index]}: ${tally[index]}`).join("\n"));
    } else {
      alert('There are currently no schedules available for booking');
    }
  });

  // request.addEventListener('timeout', event => {
  //   alert('It is taking longer than usual, please try again later.')
  // });

  request.addEventListener('loadend', event => {
    alert('The request has completed.');
  });

  request.send();
}

retrieveScheduless()