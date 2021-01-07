function parseSchedules(data) {
  let staffSchedules = {};
  data.forEach(schedule => {
    if (staffSchedules[schedule.staff_id]) {
      staffSchedules[schedule.staff_id] = staffSchedules[schedule.staff_id] + 1;
    } else {
      staffSchedules[schedule.staff_id] = 1;
    }
  });
  return staffSchedules;
}

let loadStatusArea = document.getElementById('load-status');
let displayArea = document.getElementById('answer');

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/schedules');
request.timeout = 5000;
request.responseType = 'json';

request.addEventListener('timeout', event => {
  request.abort();
  displayArea.textContent = "Sorry, that took too long. Please load and try again.";
});

request.addEventListener('load', event => {
  let data = request.response;
  let staffScheduleCounts = parseSchedules(data);

  if (Object.keys(staffScheduleCounts) === 0) {
    let message = document.createElement('p');
    message.textContent = "Sorry, there are no schedules available for booking";
    displayArea.appendChild(message);
  } else {
    Object.keys(staffScheduleCounts).forEach(staff => {
      let newLine = document.createElement('p');
      newLine.textContent = `staff ${staff}: ${staffScheduleCounts[staff]}`;
      displayArea.appendChild(newLine);
    });
  }
});

request.addEventListener('loadend', event => {
  loadStatusArea.textContent = 'Request completed.'
});

request.send();
loadStatusArea.textContent = 'Loading your content...';