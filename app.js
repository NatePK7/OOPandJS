// Advanced Web Dev Bootcamp

// Call Back functions - fn that is passed into another fn as a parameter then invoked by that other fn

function spey() {
  console.log("likes to eat steelhead");
}

function bestboy(fn) {
  console.log("Hobie the best boy");
  fn(); // callback spey function is invoked
  console.log("for dinners");
}
bestboy(spey);

// Higher order fxn is a fxn that accepts a callback as a parameter
/*
function sendMessageConsole(message) {
  console.log(message);
}

function sendMessageAlert(message) {
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}

sendMessageAlert("Lots of duplication");

// refactored

/*N function sendMessage(message, callback) {
  return callback(message);
}


sendMessage("Message for console", console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??, confirm");
*/

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



// console.clear() to clear the console


/* Start of Tricky Java Script
 
	Rule 1 Global:  if the keyword this is outside of a declared object, its value is the global or window object

	Rule 2 object/ implicit: Keyword this inside of a declared object value is the closest parent object

  Rule 3 explicit using call, apply and bind only applies to functions:  to explicitly set the value of Keyword this , we use call apply or bind.  
  
  Rule 4 New:  Keyword this  with the new keyword, the this applies to the new empty object. */

// When this is not inside of a declared object

console.log(this); // window. Keyword this in the wild (outside of the declared object. Object has not been defined which contains the keyword this)

function whatIsThis() {
  return this;
}

whatIsThis(); // window The function whatIsThis is also global because the keyword this is not inside of an declared object

// Create a global variable or object
var person = "kelli";

window.person === person; //true

//  teacher property inside of a declared object
var data = {}; // created a new global object
data.teacher = "kelli"; // added a property teacher to the data object

data.teacher; // kelli (teacher is inside of a declared object)

// Inadvertently creating global variables within a function or object
function variablesInThis() {
  // since the value of this is the window
  // all we are doing here is creating a global variable
  this.person = "kelli"; //* / attaching a property called person and setting it equal to kelli. since the key word this refers to the global object anything we attach onto it becomes a global variable which means we can use it outside of its function. Bad practice to create global variables within objects.  "use strict" to follow JS best practices. List global variables at the top of our code even if we don't know the values yet and assign those values at a later time */
}

console.log(person); // kelli

// Using strict mode uses java script best practices
("use strict");
console.log(this); // window

function variablesInThis() {
  //since we are in strict mode this is undefinied
  this.person = "kelli";
}

variablesInThis(); //type error

function whatIsThis() {
  return this;
}

whatIsThis(); // undefined

/* Rule 2 Implicit / Object: Keyword this inside of a declared object value is the closest parent object
inside of a declared object
Nested Objects */

var girl = {
  firstName: "Kimmy D",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === girl;
  },

  cat: {
    sayHello: function () {
      return "Hello " + this.firstName; //keyword this refers to the cat object
    },
    determineContext: function () {
      return this === girl;
    },
  },
};

girl.determineContext(); // true
girl.sayHi(); // Hi Kimmy D
girl.cat.determineContext(); // false
girl.cat.sayHello(); // hello undefined because the cat object does not have a key of first name

/* if we wanted to call  the sayHello method to return Hello Kimmy D instead of Hello Undefined?  We would need a way to explicitly change the value of the keyword this and that's where call, apply and bind come in */

// Fix Up with Call
var girl = {
  firstName: "Kimmy D",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === girl;
  },

  cat: {
    sayHello: function () {
      return "Hello " + this.firstName;
    },
    determineContext: function () {
      return this === girl;
    },
  },
};

girl.sayHi(); // Hi Kimmy D
girl.determineContext(); // true

girl.cat.sayHello.call(girl); // Hello Kimmy D
girl.cat.determineContext.call(girl); // true

/* we are not invoking sayHello or determineContext methods but instead 
attaching call onto them so there are no parentheses after sayHello or determineContext methods */

// Using Call in the Wild common use case

var meow = {
  firstName: "Hobie",
  sayHi: function () {
    return "Meowy Meow " + this.firstName;
  },
};

var smelly = {
  firstName: "Sophie",
  sayHi: function () {
    return "Meowy Meow " + this.firstName;
  },
};

meow.sayHi(); // Meowy Meow Hobie
smelly.sayHi(); // Meowy Meow Sophie

//refactor to remove duplication

var meow = {
  firstName: "Hobie",
  sayHi: function () {
    return "Meowy Meow " + this.firstName;
  },
};

var smelly = {
  firstName: "Sophie",
};

meow.sayHi(); // meowy mow hobie
meow.sayHi.call(smelly); //meowy meow sophie  using the meow object's function and calling smelly object. Explicitly set to the smelly object

/* Bind is partial application 
Works just like call but Bind returns a function definition set to the value of this.arg
Don't need to know all the parameters of the function when bind we only need to know what the value of the key word
this to be  */

var sam = {
  firstName: "Sam",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  addNumbers: function (a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
  },
};

var brian = {
  firstName: "Brian",
};

var brianCalc = sam.addNumbers.bind(brian, 1, 2, 3, 4);
brianCalc(); // Brian just calculated 10

var brianCalc2 = sam.addNumbers.bind(brian, 1, 2);
brianCalc2(3, 4); // Brian just calculated 10

/* Rule 4 New:  Keyword this  with the new keyword, the this applies to the new empty object. */

/* OOP (Object Oriented Programming)
Programming model based around the idea of objects
and blue prints which create objects. Blue prints are called classes
the objects that are created from these classes are called instances 
Java Script does not have built in classes- we can mimic the behavior of classes by using JavaScript functions and objects*/

/* create a constructor function for a Dog - each dog should have a name 
and an age. Add a function for each dog called 'bark,' which console.log
the name of the dog added to the string 'just barked!' */

function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.bark = function () {
    console.log(
      this.name +
        " the " +
        this.age +
        " year old " +
        this.color +
        " dog" +
        " just barked!"
    );
  };
}

var rusty = new Dog("Rusty", 3, "red");
var fido = new Dog("Fido", 1, "white");

rusty.bark(); //Rusty the 3 year old  red dog just barked!
fido.bark(); // Fido the 1 year old white dog just barked!

/* Imagine for a second that you're an architect and you're tasked with building 4 houses.

Each house is going to have a number of bedrooms bathrooms as well as a number of square feet.

The first thing that might come to mind is let's make an object for each house We need to make.

Seems pretty reasonable but once we start having to create more than a few objects things get very repetitive and tedious.

Let's refactor this code by reading a blueprint for what a house should look like.

Let's make a function that when used we'll construct a house object in javascript.

We call the special functions constructor functions. */

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

Fourth it adds the Dunder Proto property onto the object that was just created. */

/* Multiple Constructor Functions 
Now let's imagine that we have two constructor functions one for a car and one for a flyrod.

Here's the code for both of them and what we see here is nothing special just some functions that construct objects using the new keyword.

But what's not great about this code.

Look how much code we're duplicating in the motorcycle function.

It would be really neat if we could somehow borrow the code from the card function and put it in the flyrod function. */

/* you might be thinking why don't we just call the car function inside of the motorcycle function.
The problem here is when we call the car function the key word this refers to the object that will be
created from the car function.
But that's the wrong thing.
What we need to do here is change the value of the keyword this to be the object created from the motor
cycle function.
So how can we change the value of the keyword this
This we go back to our third rule of figuring out the value of the keyword this with explicit binding
.
This means we want to use call apply or bind. we can dismiss using bind because we don't want to return
a function definition so let's choose call or apply. */

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

tesla.make; // Tesla
spey.make; // G Loomis

/* Recap
We want to remove duplication from our motorcycle function.
So what we're doing is borrowing the code from the car function by calling it inside of the motor cycle
function.
The problem here is that the keyword this inside of the car function is not the keyword this that we
want to use.
So we need to change the value of the keyword this.
To do that we use CALL or  APPLY. */

/* So we need to change the value of the keyword this. To do that we use CALL or  APPLY.
And as the first parameter to CALL or APPLY we specify what we would like the value of the keyword this
to be.
The keyword this to be is the object that will be created from the motorcycle function.
The way that we get access to that object is by using the keyword this inside of the motorcycle function
.
That's why the first argument to call or apply is the keyword this which refers to the object created
from the motorcycle function when the new keyword this is used */

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

tesla.make; // Tesla
spey.make; // G Loomis

/* Using Apply with arguments

Using apply with arguments was able to reduce code 
Instead of listing make, model and year in the Car.apply in the motorcycle function
Was able to refactor to this, arguments */

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

tesla.make; // Tesla
spey.make; // G Loomis

/* 
Object Oriented Programming Recap

We learned that object oriented programming is a model based on objects which are constructed from some kind of blueprint.
In languages that had built in support for OOP, we call these blueprints 
classes and the objects created from them instances 
Since we do not have built in class support in JavaScript,
We mimic the functionality of classes by using functions to create objects 
through the use of constructor functions and the new keyword

We also saw that the new keyword does four things 
creates an object out of thin air
It sets the value of the keyword this to be that object created in the 
previous step 
it adds 'return this' to the constructor function.
And finally it sets a property on the object which we can access called Dunder Proto. */

/* OOP Prototypes

A circle is a function and a square is an object.

So here we have a person constructor function which has a property called prototype which is an object

that object has a property on it called constructor which points back to the original constructor function


If properties or methods are placed on the person prototype they can be accessible from any object created from that constructor function

The way in which these objects (which are created by the constructor function)
get access to the prototype object is through the dunder Proto link.

This link gets established when the new keyword is used. */

/* To recap every constructor function has a property on it called prototype.

The prototype property is an object which can also have methods and properties attached to it.

These methods and properties are shared and accessible by any object that is created from that constructor function, When the new keyword is used. */

// this is the constructor function
function Person(name) {
  this.name = name;
}

// this is the object created from the person constructor
var kelli = new Person("Kelli");
var sam = new Person("Sammy");
/* since we used the new keyword, we have established a link between the object
and the prototype property. we can access by using __proto__ */

kelli.__proto__ === Person.prototype; // true
sam.__proto__ === Person.prototype; // true

/* Prototype Chain 

when the new keyword is used.  A property is added to the

object created from the constructor function called dunder proto.

This property links to the prototype property on the constructor function.

But what value does this prototype property have? 
The prototype property is an object which can have methods and properties placed on it.

These methods and properties are shared and accessible by any object that is created from that constructor function when the new keyword is used . */

/* When the new keyword is used in this example where adding a property on the prototype called is instructor and setting the value to be true.
 */
function Person(name) {
  // this is the constructor function
  this.name = name;
}

var kelli = new Person("Kelli");
var sam = new Person("Samantha");

Person.prototype.isInstructor = true;

kelli.isInstructor; // true
sam.isInstructor; // true

/* Now all of our objects that have been created from this constructor using the new keyword have access to the is instructor property.

But how in the world did that happen?

We added a property on the Person.prototype object and all of a sudden two seemingly non-related objects have access to it.

The answer lies in dunder proto.

Since these objects have a link to Person.prototype they can access anything inside of it.

In fact this is actually the exact way that javascript finds methods and properties on objects.

And what we've just described is something called the prototype chain. */

// Prototype Chain
var arr = []; // created a array variable

new Array(); // []   // created new empty array
arr.push(7); // 1  //added to array one number
arr; // [7]      // called the array
console.dir(arr); // consoled the directory of the array

arr.__proto__ === Array.prototype; // true

/* The way that javascript finds methods and properties is by looking at the object and if it can't find the method or property you're looking for it goes to that objects __proto__

This actually keeps happening until the property or method is found.

And if it is not found the expression evaluates to undefined */

// Prototype Chain Exercise Refactor

function Player(name) {
  this.name = name;
  this.sayHi = function () {
    return "Hi " + this.name;
  };
}

kelli = new Player("Kelli");
kelli.sayHi(); // Hi Kelli
lynch = new Player("Beast Mode");
lynch.sayHi(); // Hi Beast Mode
// this code works but it is inefficient
// every time we make an object using the new keyword we have to redefine this function
// but its the same for everyone so let's put it on the prototype instead

// Refactored
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return "Hi " + this.name;
};

kelli = new Person("Kelli");
kelli.sayHi(); // Hi Kelli

kim = new Person("Kimmy D");
kim.sayHi(); // Hi Kimmy D

/* Create a constructor function for a vehicle.

Every object created from this constructor function should have a make model and year property 

each object should also have a property called is running which should be equal to false.

Every object created from the vehicle constructor should have a function called Turn on which changes the is running property for that object to true 

every object created from a local constructor should also have a function called Turn off which changes the is running property to False.

Finally every object created from the vehicle constructor should have a method called honk which returns the string beep only if the is running property on that object is true. */

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
};

Vehicle.prototype.honk = function () {
  if (this.isRunning) {
    return "beep";
  }
};

var tesla = new Vehicle("Tesla", "Model 3", "2018");
tesla.make; // Tesla
tesla.isRunning; // false
tesla.turnOn; // this.isRunning = true
tesla.honk; // returns the honk function above

var bmw = new Vehicle("BMW", "M235i", "2014");
bmw.model; // M235i
bmw.honk; // returns the honk function above
