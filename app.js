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

// When this is not inside of a declared object


console.log(this); // window. Keyword this in the wild (outside of the declared object. Object has not been defined which contains the keyword this)

function whatIsThis() {
  return this;   
}

whatIsThis(); // window The function whatIsThis is also global because the keyword this is not inside of an declared object

// Create a global variable or object
var person = 'kelli'

window.person === person //true

// Inadvertently creating global variables within a function or object
function variablesInThis() {
  // since the value of this is the window
  // all we are doing here is creating a global variable
  this.person = "kelli"  //* / attaching a property called person and setting it equal to kelli. since the key word this refers to the global object anything we attach onto it becomes a global variable which means we can use it outside of its function. Bad practice to create global variables within objects.  "use strict" to follow JS best practices. */ 
}

console.log(person); // kelli



//  teacher property inside of a declared object
var data = {}; // created a new global object
data.teacher = "kelli"; // added a property teacher to the data object

data.teacher;  // kelli (teacher is inside of a declared object)

// inside of a declared object
var girl = {
  firstName: "Kimmy D",
  sayHello: function() {
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

cat.sayHello; // returns undefined

// Fix with CAll
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
      return "Meow " + this.firstName;
    },
    determineContext: function() {
      return this === girl;
    }
  }
};

girl.sayHi();
girl.determineContext();

girl.cat.sayHello.call(girl); // Hello Kimmy D
girl.cat.determineContext.call(girl); // true

// Using Call in the Wild common use case

var meow = {
  firstName: "Hobie",
  sayHi: function() {
    return "Meowy Meow " + this.firstName;
  }
};

var smelly = {
  firstName: "Sophie",
  sayHi: function() {
    return "Meowy Meow " + this.firstName;
  }
};

meow.sayHi(); // Meowy Meow Hobie
smelly.sayHi(); // Meowy Meow Sophie

//refactor to remove duplication

var meow = {
  firstName: "Hobie",
  sayHi: function() {
    return "Meowy Meow " + this.firstName;
  }
};

var smelly = {
  firstName: "Sophie"
};

meow.sayHi(); // meowy mow hobie
meow.sayHi.call(smelly); //meowy meow sophie

// Bind
var sam = {
  firstName: "Sam",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  addNumbers: function(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
  }
};

var brian = {
  firstName: "Brian"
};

var brianCalc = sam.addNumbers.bind(brian, 1, 2, 3, 4);
brianCalc(); // Brian just calculated 10

var brianCalc2 = sam.addNumbers.bind(brian, 1, 2);
brianCalc2(3, 4); // Brian just calculated 10

/* create a constructor function for a Dog - each dog should have a name 
and an age. Add a function for each dog called 'bark,' which console.log
the name of the dog added to the string 'just barked!' */

function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.bark = function() {
    console.log(this.name + " the " + this.color + " dog" + " just barked!");
  };
}

var rusty = new Dog("Rusty", 3, "red");
var fido = new Dog("Fido", 1, "white");

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

var firstHouse = new House(4, 3, 2900);
firstHouse.bedrooms; // returns 4

// because of the new keyword the this.value above which should be global is instead tied to the new empty object

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

// Using Call
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function flyRod(make, model, year) {
  Car.call(this, make, model, year); // call uses comma separated
  this.numWheels = 0;
}

var tesla = new Car("Tesla", "Model 3", "2018");
var spey = new flyRod("G Loomis", "Asquith", "2020");

tesla.make;
spey.make;

// Using Apply
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function flyRod(make, model, year) {
  Car.apply(this, [make, model, year]); // apply uses arrays
  this.numWheels = 0;
}

var tesla = new Car("Tesla", "Model 3", "2018");
var spey = new flyRod("G Loomis", "Asquith", "2020");

tesla.make;
spey.make;

// Using Apply with arguments
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function flyRod(make, model, year) {
  Car.apply(this, arguments); // refactor with arguments instead of using make, model and year
  this.numWheels = 0;
}

var tesla = new Car("Tesla", "Model 3", "2018");
var spey = new flyRod("G Loomis", "Asquith", "2020");

tesla.make;
spey.make;
