/* 

What is map()?
The map() function is an array method in JavaScript. It creates a new array by applying a function to every item in the original array. It doesn't change the original array but returns a new one.


syntax
=======
let  newArrary = array.map(function(element){
})

let newArrary = array.map((element,index,array) => {
    })
example
----------

let numbers = [1,2,3,4,5];
let doubled = number.map(function(number){
    return number*2;

});


let numbers = [1, 2, 3, 4];
let result = numbers.map((number, index) => {
  return `Element at index ${index} is: ${number}`;
});

console.log(result);
// Output: ["Element at index 0 is: 1", "Element at index 1 is: 2", "Element at index 2 is: 3", "Element at index 3 is: 4"]
*/

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  let names = users.map(user => user.name);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
  