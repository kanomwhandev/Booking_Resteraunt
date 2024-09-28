document.addEventListener("DOMContentLoaded", function () {
  loadReservationData();


  document
    .getElementById("reservationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      
      const fullname = document.getElementById("fullname").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const seats = document.getElementById("seats").value;


      const reservation = {
        fullname: fullname,
        date: date,
        time: time,
        seats: seats,
      };
      saveReservationData(reservation);
      displayReservationData(reservation);
      
    });
});


function saveReservationData(reservation) {
  localStorage.setItem("reservation", JSON.stringify(reservation));
 
  
  
}

function loadReservationData() {
  const reservation = JSON.parse(localStorage.getItem("reservation"));
  
  


  if (reservation) {
    document.getElementById("fullname").value = reservation.fullname;
    document.getElementById("date").value = reservation.date;
    document.getElementById("time").value = reservation.time;
    document.getElementById("seats").value = reservation.seats;
    
  }
}


function displayReservationData(reservation) {
  const displayDiv = document.getElementById("Current Booking");
  displayDiv.innerHTML = `
        <h2>Current Bookings</h2>
        <p><strong>Full Name:</strong> ${reservation.fullname}</p>
        <p><strong>Date:</strong> ${reservation.date}</p>
        <p><strong>Time:</strong> ${reservation.time}</p>
        <p><strong>Seats:</strong> ${reservation.seats}</p>
        
        
    `;
}

function deleteReservation() {
  localStorage.removeItem("reservation");


  const displayDiv = document.getElementById("Current Booking");
  displayDiv.innerHTML = "";
 
  
}


function displayReservationData(reservation) {
 
  
  const displayDiv = document.getElementById("Current Booking");
  
  displayDiv.innerHTML = `
      <h2>Current Bookings</h2>
      <p><strong>Full Name:</strong> ${reservation.fullname}</p>
      <p><strong>Date:</strong> ${reservation.date}</p>
      <p><strong>Time:</strong> ${reservation.time}</p>
      <p><strong>Seats:</strong> ${reservation.seats}</p>
      <button onclick="deleteReservation()">Cancel Booking</button>
      
  `;
  alert("Booking successful");
}


