var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var tempArray = array
  return tempArray.unshift(element)
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
