

function findIndex(arr, callback) {
    
}


// HINTS
  // the function should iterate through the array passed to it and invoke the callback function at each iteration
  // the callback function should accept three parameters - the value you are iterating over, the index you are currently at, and the entire array
  // if the callback returns true at any point, return the index at which you are iterating over
  // otherwise return -1


function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}


function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
  if (callback(arr[i], i, arr)) {
    return i;
  }
}
return -1;
}


// HINTS
// the function should iterate through the array passed to it and invoke the callback function at each iteration
// the callback function should accept three parameters - the value you are iterating over, the index you are currently at, and the entire array
// if the callback returns true at any point, return the index at which you are iterating over
// otherwise return -1