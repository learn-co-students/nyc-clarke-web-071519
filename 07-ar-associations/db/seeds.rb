Client.destroy_all
Barber.destroy_all
Appointment.destroy_all

[
  { name: "Joe" },
  { name: "Anya" },
  { name: "Mikey" },
  { name: "Tommy" },
  { name: "Aria" },
  { name: "Brendan" }
].each do |barber_hash|
  Barber.create(barber_hash)
end

[
  {name: "Tracy"},
  {name: "Jane"},
  {name: "Neo"},
  {name: "Trinity"},
  {name: "Morpheus"},
  {name: "The Oracle"},
  {name: "Agent Smith 😎"},
].each do |client_hash|
  Client.create(client_hash)
end

Appointment.create(barber_id: Barber.last.id, client_id: Client.last.id, time: "NOW!")
Appointment.create(barber_id: Barber.first.id, client_id: Client.last.id, time: "NOW!")