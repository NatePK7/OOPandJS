// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

/* 
Start of Tricky Java Script
1. Rule 1 Global:  Keyword this in the wild (outside of the declared object. Object has not been defined which contains the keyword this) Value refers to the global object which is the window object (browser)
2. Rule 2 object/ implicit: Keyword this inside of a declared object value is the closest parent object
3. Rule 3 explicit using call, apply and bind only applies to functions:  to explicitly set the value of Keyword this , we use call apply or bind.  with the bind keyword, the first argument called is this
Rule 4 New:  Keyword this  with the new keyword, the this applies to the new empty object.
console.log(this) */

function whatIsThis() {
  return this;
}

function variablesInThis() {
  this.person = "billy";
}

variablesInThis();
whatIsThis();

console.log(this);

function whatIsThis() {
  return this;
}

function variablesInThis() {
  this.person = "billy";
}

variablesInThis();
whatIsThis();

var data = {}; // created a new global object
data.instructor = "hobie"; // added a property instructor to the data object

var girl = {
  firstName: "Kimmy D",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === girl;
  },

  cat: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};

var cat = {
  firstName: "Hobie",
  sayHi: function() {
    return "Meow " + this.firstName;
  }
};
var kim = {
  firstName: "Kimmy"
};
cat.sayHi();
cat.sayHi.call(kim);

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked!");
  };
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();
fido.bark();

// OOP

// set up constructor function
function House(bedrooms, bathrooms, numSqft) {
  // constructor function is capitalized which is convention
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000); // because of the new keyword the this.value above which should be global is instead tied to the new empty object

firstHouse.bedrooms;

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function flyRod(make, model, year) {
  Car.apply(this, arguments);
  this.numWheels = 0;
}

/* new keyword
Now before we recap with a new keyword does pause the video and see if you remember any of those four
things.

First it creates an empty object out of thin air.

Second it then sets the value of the keyword.
This in the function which is being used with to be the empty object that was just created.

Third it adds an implicit return.
This at the end of the function so that the object created using the new keyword can be returned from
the function.

Fourth it adds the Dunder Prato property onto the object that was just created. */

var tesla = new Car("Tesla", "Model 3", "2018");

var spey = new flyRod("G Loomis", "Asquith", "2020");

// tesla.make();
// spey.make();
