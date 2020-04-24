var firstName = "Hobie";
var lastName = "Hoberson";

var greeting = "Hello" + firstName + " " + lastName

greeting


// compare with template literals

var greeting =(`Hello ${firstName} ${lastName}`); 
greeting

// ARROW functions

var add = function(a,b) {
  return a +b;
}

//ES2015

var add = (a,b) => {
  return a +b;
}

add(1,2)

// Arrow Function 
// Double and Filter example

function doubleAndFilter(arr) {
  return arr.map(function(value){
    return value * 2
  }).filter(function(value){
    return value % 3 === 0
  })
};

doubleAndFilter([5,10,15,20]);  //30

// with arrow functions on one line
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);
doubleAndFilter([5,10,15,20]);  //30

// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }

// 1
let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// 2
let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2 );

// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

// 3
let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
  .reduce((acc,next) => {
      acc[next] = next.length
      return acc;
    }, {})

// 4
let createStudentObj = (firstName, lastName) => ({firstName:firstName, lastName:lastName});

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     setTimeout(function(){
//       console.log('Hello ' + this.firstName)
//     },1000)
//   }
// }

// 5
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(() =>{
      console.log('Hello ' + this.firstName)
    }, 1000)
  }
}