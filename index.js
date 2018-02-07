var katzDeliLine = []

function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var place = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${place} in line.`
}
function nowServing (katzDeliLine){
  var person = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${person}.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
  var list = "The line is currently:"
  var num = 0
  var person
  while (num < katzDeliLine.length){
    person = katzDeliLine[num]
    num++
    list = list + ` ${num}. ${person},`
  }
  return list
  }
}