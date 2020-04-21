
// Advanced Web Dev Bootcamp

// Call Back functions - fn that is passed into another fn as a parameter then invoked by that other fn

function callback() {
  console.log("coming from callback");
}

function higherOrder(fn) {
  console.log("about to call callback");
  fn(); // callback spey function is invoked
  console.log("callback has been invoked");
}
higherOrder(callback);



//callbacks with function declarations

function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Hobie", upperCaseName);

//anonymous function

function greet(name, formatter) {
  return "Hello ",  + formatter(name);
}
greet("Hobie ", function(name){
  return name.toUpperCase();
});


function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Tim", function(name) {
  return name.toUpperCase();
});

greet("Tim", function(name) {
  return name + "!!!!!";
});

