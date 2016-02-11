// Flattening
//use reduce and concat to 'flatten' a nested array into a single one that has all the original elements
var array = [[2, 4, 6], [8], [10, 12]];

var flattenedArray = array.reduce(function(e1, e2){
  return e1.concat(e2);
}, []);

console.log(flattenedArray);
