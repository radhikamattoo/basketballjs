/*
Radhika Mattoo, rm3485@nyu.edu
Applied Internet Tech Spring 2016
Homework 2
*/
/* Flattening
Use reduce and concat to 'flatten' a nested array into a single one that has all the original elements
*/
var array = [[2, 4, 6], [8], [10, 12]];

var flattenedArray = array.reduce(function(e1, e2){
  return e1.concat(e2);
}, []);

console.log(flattenedArray);

/* Every and Then Some
Arrays come with every and some methods returns T or F for element comparison
Write the two functions that take the array as the first argument rather than a method
*/

function every(array, func){
  //apply the function to every element of the array
  console.log("Running every...");
  for(var i = 0; i < array.length; i++){
    if(!func(array[i])){
      return false;
    }
  }
  return true;
}

function some(array, func){
  //apply the function to every element until you get 1 true return back
console.log("Running some...");
  for(var i = 0; i < array.length; i++){
    if(func(array[i])){
      return true;
    }
  }
  return false;
}

console.log(every([9, 48, 204, 528942], function(e){
  return e % 3 === 0;
}));

console.log(some(['aardvark', 'abbreviate', 'abacuses', 'abandoners', 'abalones'], function(e){
  return e.length === 9;
}));
