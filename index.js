var katzDeli = []

function takeANumber (katzDeli, newPerson){
  katzDeli.push(newPerson)
  var place = katzDeliLine.length + 1
  return "Welcome, ${newPerson}. You are number ${place} in line."
}
function nowServing (katzDeli){
  return "Currently serving ${person}."
}