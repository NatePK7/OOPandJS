
/* I'm going to open the chrome developer console and create a function called outer
inside of the outer function, I'm going to create a variable called Start and assign it to the string.
'Closures are'

I'll then return a function from the outer function and call it inner
 inside of here. I'll return the string start concatenated with the string. Awesome.

If I invoke the outer function I'm going to see the definition of the inner function */

function outer() {
  var start = "Closures are"
  return function inner() {
    return start + ' ' + 'awesome'
  }
}
outer()

// and if I invoke the inner function right away I'll see the string closures are awesome.

function outer() {
  var start = "Closures are"
  return function inner() {
    return start + ' ' + 'awesome'
  }
}
outer()()


function outer(a) {
  return function inner(b){
    // the inner function is making use of the variable "a"
    // which was defined in an outer function called "outer"
    // and by the time inner is called, that outer function has returned
    // this function called "inner" is a closure
    return a + b;
  }
}
outer(5)(5); //10

var storeOuter = outer(5);
storeOuter(10); // 15


/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
  }
  return a*b;
}

/* https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/lecture/7307118#overview

Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/



function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);  // random number between zero and 10
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer) {
                completed = true;
                return "You got it!"
            }
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
        }
        return "You are all done playing!"
    }
}