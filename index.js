var katzDeli = []

function takeANumber (katzDeli, newPerson){
  katzDeli.push(newPerson)
  var place = katzDeliLine.length + 1
  return "Welcome, ${newPerson}. You are number ${place} in line."
}
function nowServing (katzDeli){
  var person = katzDeli[0]
  katzDeli.shift()
  return "Currently serving ${person}."
}

function currentLine(katzDeli){
  var list
  var num = 0
  var person
  while (num < katzDeli.length){
    person = katzDeli[num]
    num++
    list = list + " ${num}. ${person},"
  }
  return "The line is currently ${list}"
}