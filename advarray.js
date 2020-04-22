// an example

var arr = [1,2,3];

arr.forEach(function(value, index, array){
  console.log(value);
});

// console value 1 2 3 undefined

// How does it work
function forEach(array, callback) {
  for(var i=0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// because no return   console value is undefined

// using for each in a function
function halfValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push( val / 2);

  })
  return newArr;
}

halfValues([2,4,6]);


// forEach practical exercises


function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1])
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}


// Map https://www.udemy.com/course/the-advanced-web-developer-bootcamp/learn/lecture/7307058#overview

var arr = [1,2,3];

arr.map(function(value, index, array) {
  return value * 2;
});

// [2,4,6]


function tripleValues(arr){
  return arr.map(function(val){  // 1st return value for result of the map which is a new array
      return val * 3  // inside the callback function to make sure that my new array has the coorect value
  });
}

tripleValues([,1,2,3]);  // [3.6.9]



function valTimesIndex(arr){
  return arr.map(function(val,idx){
      return val*idx;
  })
}

function extractValue(arr,key){
  return arr.map(function(val){
      return val[key];
  });
}

function extractFullName(arr){
  return arr.map(function(val){
    return val.first + " " + val.last;
  });
}


// filter

var arr = [1,2,3];
arr.filter(function(value, index, array){
  // no need for an if statement
  // just returns an expression
  // that evaluates to true or false
  return value > 2;
});

// [3]

var cats = [{name: "Hobie"},
            {name: "Timmy"},
            {name: "Josephine"},
            {name: "Bo"}
            ];
cats.filter(function(value, index, array){
  return value.name.length > 3;
});

/* (2) [{…}, {…}]
0: {name: "Hobie"}
1: {name: "Josephine"}
length: 2
__proto__: Array(0)
*/

function onlyFiveLetterCats (arr) {
    return arr.filter(function(value) {  // 1st return value for result of the map which is a new array
      return value.length === 5; // inside the callback function to make sure that my new array has the correct value
    });
  }
  onlyFiveLetterCats(['Hobie', 'Timmy', 'Josephine', 'Colt']);
   /*
   (2) ["Hobie", "Timmy"]
  0: "Hobie"
  1: "Timmy"
  length: 2
  __proto__: Array(0)
  */
  
  
  
function filterByValue(arr,key){
  return arr.filter(function(val){
      return val[key] !== undefined;
  });
}

function find(arr, searchValue){
  return arr.filter(function(val){
      return val === searchValue
  })[0];
}

function findInObj(arr, key, searchValue){
  return arr.filter(function(val){
      return val[key] === searchValue;
  })[0];
}

function removeVowels(str){
  var vowels = "aeiou"
  return str.toLowerCase().split("").filter(function(val){
      return vowels.indexOf(val) === -1;
  }).join('')
}

function doubleOddNumbers(arr){
  return arr.filter(function(val){
      return val % 2 !== 0;
  }).map(function(val){
      return val *2;
  })
}

// SOME 

var arr = [1,2,3];

arr.some(function(value, index, array){
  return value <2;
});



// EVERY


// REDUCE

var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
});

// 15

var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
},10);

// 25

//REDUCE with Strings

var cats = ['Hobie', "molly", 'sophie'];

cats.reduce(function(accumulator, nextValue){
  return accumulator += ' ' + nextValue;
}, 'the jellicles are ');


// How about Objects

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
  return arr.reduce(function(acc,next){
      acc.push(next[key]);
      return acc;
  },[]);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
  var vowels = "aeiou";
  return str.toLowerCase().split('').reduce(function(acc,next){
      if(vowels.indexOf(next) !== -1){
          if(acc[next]){
              acc[next]++;
          } else {
              acc[next] = 1;
          }
      }
      return acc;
  }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/


function addKeyAndValue(arr, key, value){
  return arr.reduce(function(acc,next,idx){
      acc[idx][key] = value;
      return acc;
  },arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/


function partition(arr, callback){
  return arr.reduce(function(acc,next){
      if(callback(next)){
          acc[0].push(next);
      } else {
          acc[1].push(next);
      }
      return acc;
  }, [[],[]]);
}