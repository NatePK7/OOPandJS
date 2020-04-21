/* Promise Chaining 
https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/lecture/7952184#overview

Objectives
• Describe the disadvantages of using nested callbacks
• Return a promise from a .then callback function
• Use a promise to make asynchronous code seem sequential
*/

// nested async callbacks no promise chaining
var counter = 0;
setTimeout(function() {
  counter++;
  console.log("Counter:", counter);
  setTimeout(function() {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function() {
      counter++;
      console.log("Counter:", counter);
    }, 3000);
  }, 2000);
}, 1000);

• The code is hard to read
• Logic is difficult to reason about
• The code is not modular



Compare with 

// promise refactor
// step 1  create a function declaration
var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}
// step 2 create a runLater function
var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}
function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}
// step 3 chain promises
var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}
function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}
runLater(incCounter, 1000).then(function() {
  return runLater(incCounter, 2000);
}).then(function() {
  return runLater(incCounter, 3000);
});






