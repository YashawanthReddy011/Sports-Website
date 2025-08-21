fetch(`${API}/api/bookings`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ eventId, name, email, seats })
})
.then(r => r.json()).then(x => console.log(x));
