
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


function forEach(array, callback) {
  // To be implemented
}

// Callback signature
function callback(curElement, currentIndex, array) {
  // Implemented by the caller of forEach
}


var arr = [1,2,3,4,5,6];
forEach(arr, function(number) {
    console.log(number * 2);
});


// forEach Example With All Callback Parameters
var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

// result ="my "


var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

// result ="my forEach "

var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

// result ="my forEach example!!!"

var strings = ["my", "forEach", "example"];
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
