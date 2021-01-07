function cancelMeeting(scheduleId) {
  $.ajax({
    url: `http://localhost:3000/api/schedules/${scheduleId}`,
    type: 'DELETE',
  }).done((response) => {
    alert('Successfully removed the schedule.');
  }).fail((response) => {
    if (response.status === 403) {
      alert(response.responseText);
    } else if (response.status === 404) {
      alert(response.responseText);
    }
  });
}

cancelMeeting(20);

function cancelReservation(bookingId) {
  let request = new XMLHttpRequest();
  request.open('PUT', `http://localhost:3000/api/bookings/${bookingId}`);
  request.send()

  request.addEventListener('load', () => {
    if (request.status === 404) {
      alert(request.responseText);
    } else {
      alert('Successfully removed the booking.');
    }
  })
}

cancelReservation(20);