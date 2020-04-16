
// For Each
var arr = [1,2,3,4,5];
function double(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);

// contrast with

var arr = [1,2,3,4,5];
forEach(arr, function(number) {
  console.log(number * 2);
});


// For Each

function double(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);

var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
  return num === 6;
});


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