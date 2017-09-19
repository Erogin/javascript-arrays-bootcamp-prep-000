var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var firstElementRemoved = array.slice(1)
  return firstElementRemoved
}

function destructivelyAddElementToEndOfArray(array){
  var length = array.length
  array.pop()
  array[length] = length
  return array
}

function removeElementFromEndOfArray(array){
  var lastElementRemoved = array.slice(-1)
  return lastElementRemoved
}
