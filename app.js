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
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === girl;
  },

  cat: {
    sayHello: function() {
      return "Hello " + this.firstName; //keyword this refers to the cat object
    },
    determineContext: function() {
      return this === person;
    }
  }
};

girl.determineContext(); // true
girl.sayHi(); // Hi Kimmy D
girl.cat.determineContext(); // false
girl.cat.sayHello(); // hello undefined because the cat object does not have a key of first name

/* if we wanted to call  the sayHello method to return Hello Kimmy D instead of Hello Undefined?  We would need a way to explicitly change the value of the keyword this and that's where call, apply and bind come in */

// Fix Up with Call
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
      return this === girl;
    }
  }
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
meow.sayHi.call(smelly); //meowy meow sophie  using the meow object's function and calling smelly object. Explicitly set to the smelly object


/* Bind is partial application 
Works just like call but Bind returns a function definition set to the value of this.arg
Don't need to know all the parameters of the function when bind we only need to know what the value of the key word
this to be  */

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
  this.bark = function() {
    console.log(this.name + " the " + this.color + " dog" + " just barked!");
  };
}

var rusty = new Dog("Rusty", 3, "red");
var fido = new Dog("Fido", 1, "white");

rusty.bark();
fido.bark();


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

tesla.make;  // Tesla
spey.make;  // G Loomis



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

tesla.make;  // Tesla
spey.make;  // G Loomis 
