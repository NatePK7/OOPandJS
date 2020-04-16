//////////Scope /////////////////

function localScope() {
  var cat = "hobie";

  function lexicalScope() {
    console.log(cat);
  }
  lexicalScope(); // lexical scope have an inner function to access the scope of an outer function
}

localScope();

//////////////Automatic Global Scope ////////////////////

myFunc();

console.log(myName);

function myFunc() {
  var myName = "hobie"; // undefined as myName is declared in local scope
}

//  versus
myFunc();

console.log(myName);

function myFunc() {
  myName = "Rooty Tooty Fresh and Fruity"; // variable not declared anywhere automatically becomes global variable
}

//////////////////////////////// Hoisting //////////////////

hobieSays("mew");

function hobieSays(sound) {
  //with hoisting the function is moved to the top of the code because the
  console.log(sound); // function and declarations is stored in memory during compile stage and then function is called making it
  // appear as declarations being moved to the top of the code
}

function sayMeow() {
  console.log(cat);
  var cat = "meow"; // will return undefined as var cat is hoisted to the top but uninitialized
}

sayMeow();

//// var, let, const  ///

// var - broadest of all variables - may be used outside of its block, may be reassigned
// var is globally scoped or locally scoped to the function in which it is defined
// let - variable will only be scoped to the block which it is defined, may be reassigned
// const - strictest of all variables - const cannot be reassigned and is scope to the block which it is defined

/// Key word This ////////////////////////


// new keyword section 4.35 


function Student (name, age) {
  this.name = name;
  this.age = age;
}

var first = new Student("John", 26);
var second = new Student("Julie", 32);
var third = new Student("Julia", 28);


Student.prototype.sayInfo = function () {
  return this.name + ' is ' + this.age + ' years old';
}



second.sayInfo()





/* The 'new' Keyword & Prototypes (article)
The Four Rules.
The simplest way to understand the new operator is to understand what it does. When you use new, four things happen:

It creates a new, empty object.
It binds this to our newly created object.
It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
It adds a return this to the end of the function, so that the object that is created is returned from the function.
Broken Down
It’s okay if these rules don’t all make sense yet. Lets start out simple. Create a constructor function called Student. This function will take two parameters, name, and age. It will then set these properties on the value of this.

function Student(name, age) {
  this.name = name;
  this.age = age;
}
Perfect. Now lets invoke our constructor function with the new operator. We’re going to pass in two arguments: 'John', and 26.

var first = new Student('John', 26);
So, what happens when we run the above code?

A new object is created — the first object.
this is bound to our first object. So any references to this will point to first.
Our __proto__ is added. first.__proto__ will now point toStudent.prototype.
After everything is done, our brand new first object is returned to our new first variable.
We can now run a few simple console.log statements to test if it worked:

console.log(first.name);
// John
console.log(first.age);
// 26
Awesome. Let’s dive more into the __proto__ portion of the new keyword.

Prototypes
Every JavaScript object has a prototype. All objects in JavaScript inherit their methods and properties from their prototypes.

Lets check out an example. Open up your Chrome Developer Console (Windows: Ctrl + Shift + J)(Mac: Cmd + Option + J) and type the Student` function from earlier in this article:

function Student(name, age) {
  this.name = name;
  this.age = age;
}
To prove that every object has a prototype, lets now type:

Student.prototype;
// Object {...}
Cool, an object is returned. Now lets try creating a new student:

var second = new Student('Jeff', 50);
We’ve used our Student constructor function to create our second student named Jeff. And, since we used the new operator, the __proto__ property should have also been added to our second object. It should point to the parent constructor. Lets try seeing if they’re equal:

second.__proto__ === Student.prototype;
// true
Finally, our Student.prototype.constructor should point to our Studentconstructor function:

Student.prototype.constructor;
//  function Student(name, age) {
//    this.name = name;
//    this.age = age;
//  }
Take a look at this image:


As you can see above, our Student constructor function (as well as all other constructor functions) have a property called .prototype. This prototype has an object on it called .constructor which points back to the constructor function. It’s a nice little loop. Then, when we use the new operator to create a new object, each object has .__proto__ property which links the new object back to the Student.prototype.

So why is this so important?

It’s important because of inheritance. The prototype object is shared among all objects created with that constructor function. This means we can add functions and properties to the prototype that all of our objects can use.
In our above examples, we only created two Student objects, but what if instead of two students, we have 20,000? All of a sudden, we’re saving a ton of processing power by putting shared functions on the prototype instead of in each of the student objects.

Lets look at an example to drive this idea home. In your console add the following line:

Student.prototype.sayInfo = function(){
  console.log(this.name + ' is ' + this.age + ' years old');
}
Again, what we’re doing here is adding a function to the Student prototype — Any student we create or have created now has access to this brand new .sayInfo function! Let’s test it out:

second.sayInfo();
// Jeff is 50 years old
Add a new student and try it again:

var third = new Student('Tracy', 15);
// Now if we log third out, we see the object only has two
// properties, age and name. Yet, we still have access to the 
// sayInfo function:
third;
// Student {name: "Tracy", age: 15}
third.sayInfo();
// Tracy is 15 years old
It works! And it works because of inheritance. With JavaScript objects, an object will first look to see if it has the property we are calling. If it doesn’t, it then moves upwards, to it’s prototype and says ‘Hey, do you have this property?’. This same pattern continues all the way up until we either find that property, or we reach the end of the prototype chain at the global object.

Inheritance is the same reason you’ve been able to use functions like .toString() in the past! Think about it, you’ve never written a toString() method, yet you’ve been able to use it just fine. That’s because the method, as well as other built in JS methods are on the Object prototype. Every object we create ultimately delegates to the Object prototype. And sure, we could over write these methods with something like this:

var name = {
  toString: function(){
    console.log('Not a good idea');
  }
};
name.toString();
// Not a good idea
Our object first checks to see if it has the method before moving to the prototype. Since we do have the method, it is run and there is no inheritance needed. But that’s not a good idea. Leave global methods as they are and name your functions something else.

Conclusion
As a new developer this may be a very tough concept to wrap your head around, but once you do, you can write much better, dryer code. With prototypes we can share the same pieces of code across hundreds, even thousands of objects quickly and effectively. */

var person = {
  firstName: "Hobie",
  sayHi: function(){
    return "Hi " + this.firstName
  },
  determineContext: function(){
    return this === person
  }
}

person.sayHi()  // Hi Hobie
person.determineContext()  // true



// Call Bind and Apply

// Call invoked immediately.  this keyword with arguments 

// Apply invoked immediately. this keyword with array

// Bind returns a function that can be invoked later. this keyword with arguments

function add(c,d){
  console.log(this.a + this.b + c + d);
};

var nums = {a: 1, b: 2};

add(3,4);  // this.a and this.b are not defined and will return NaN (Not a Number) in the console

add.call(nums, 3,4);  

add.apply(nums, [3,4]);   // apply with array

var small = {
  a: 1,
  go: function(b,c,d){
    console.log(this.a + b + c +d);
  }
}

var large = {
  a: 100
}

small.go(2,3,4);

small.go.call(large,2,3,4);

var saveForLater = small.go.bind(large,2);

console.log(saveForLater);

saveForLater(3,4);


// bind 

var hobie = {
  firstName: "Hobie",
  sayHi: function(){
    return "Hi " + this.firstName
  },
  addNumbers: function(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var paul = {
  firstName: "Paul"
}

var paulCalc = hobie.addNumbers.bind(paul,1,2,3,4)
paulCalc()

// with bind- do not need to know all the arguments up front
var paulCalc2 = hobie.addNumbers.bind(paul,1,2)
paulCalc(3,4)




// recursion or nested function call after a function calls itself

function factorial(x) {
  if (x< 0) return;   // termination
  if (x === 0) return 1;  // base
  return x * factorial(x-1); // recursion
}

factorial(3);

// recursion reverse string

function revStr(str){
  if (str === '') return '';  // base case is also the termination case. assumes users will always input a string
  return revStr(str.substr(1)) + str[0]  // recursion using substring method at index position
}

revStr('Hobie')

'cat'.substr(1)    // "at"
'cat'.substr(0)   // "cat"
'cat'.substr(2)  // "t"




// Web Developer Bootcamp

// intro to loops

var count = 1;
while(count < 6) {
  console.log("count is " + count);
  count++
}


var str = "hello";
var count = 0
while(count < str.length) {
  console.log(str[count]);
  count++
}

var num = 1;
while(num <= 10) {
  console.log(num);
  num += 2
}

var num = 1
while(num <= 20) {
  if(num % 4 === 0){
    console.log(num);
  }
  num++;
}

console.log("printing all numbers divisible by 5 and 3 between 5 and 50")
var counter = 5;
while(counter <= 50) {
  if(counter % 5 === 0 && counter % 3 === 0 ) {
    console.log(counter);
  }
  counter+=1
}


// for loops
// for(initialize; condition (when the loop should keep running); step -what should happen after every iteration){
  // run some code
// }


// Print numbers from 1-5 with a for loop
for(var count = 1; count < 6; count++) {
  console.log(count);
}

var str = "hello hobie hoberson"
for(var i = 0; i < str.length; i++) {  // i is conventionally used as a temparary variable
  console.log(str[i]);
}

// with a while loop

var str = "hello hobie hoberson"
var count = 0;
while(count < str.length) {
  console.log(str[count]);
  count++;
}


























