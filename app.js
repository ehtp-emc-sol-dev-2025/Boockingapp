const events = [
  { id: 1, name: "Tech Conference 2025" },
  { id: 2, name: "Startup Pitch Night" },
  { id: 3, name: "Web Dev Workshop" }
];

const eventSelect = document.getElementById("event");
const eventList = document.getElementById("eventList");

// Populate dropdown and event list
events.forEach(event => {
  const option = document.createElement("option");
  option.value = event.id;
  option.textContent = event.name;
  eventSelect.appendChild(option);

  const li = document.createElement("li");
  li.textContent = event.name;
  eventList.appendChild(li);
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const eventId = eventSelect.value;
  const eventName = events.find(ev => ev.id == eventId).name;

  alert(`Thanks, ${name}! You've booked "${eventName}". Confirmation sent to ${email}.`);
});
