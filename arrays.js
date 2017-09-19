var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var tempArray = new Array()
  tempArray = array.unshift(element)
  return tempArray
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
