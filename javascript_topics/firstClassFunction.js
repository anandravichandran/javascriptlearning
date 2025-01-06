
// function Statement

function a(){
    console.log("a called")

};
a();

// function Expression

//  => functions are acts as a values
var b = function(){
    console.log("b called");
}
b();

// the differences between two of is hoisting

// how it is when we invoke a function at the top 
// a() --> o/p is a called 
// b() --> type error why it is when we excuted the js  line by line until var b is undefined until it reached the b();


// function Declaration and Function statement are same

// Anonymous function --> a function without a function name is a anonymous function
// it doest have a own identity it reache the syntax error {function statement requires function name}

// function are used as a value
function () {
 // In function statement you cant use as a anonymous function
}



// Named Function Expression
var b = function xyz(){
    console.log('b');
    console.log(xyz);
}
b(); // the output will be b

// incase we call the xyz() outside the function it shows an refrences error xyz is not defined but we can access the function inside the statement
xyz();


// Difference between Parameters & Arguments
var b = function(param1,param2){
    console.log("b called");
// the function which inside is knows as identifier , label are called as parameters


}

b(1,2)  // invoke function inside the value are called as arguments.



// First Class Functions

// ability the functions use as value can be pass as the argument to the another function, and ability to pass the function to another function and return from the function this ability is known as first class function

var b = function (param1){
    console.log(param1);

}

function xyz(){

}

b(); // f(){ }

b(xyz); // f xyz(){ } , pass one function to another function

 // we can return a anonymous function from a function 
var b = function(param1){
    // using named function
     return function xyz(){
    // incase of using anonymous function return function(){ }
     }
}
console.log(b()); // f xyz() { }

// ============Another example

function createMultiplier(factor){
    return function(number){
        return number*factor;

    }
}

// ======================
var b = function(params1){
    return function (){

    }
}
console.log(b());
// 

let multiplyBythree = createMultiplier(3);
console.log(multiplyBythree);

// ======First class Citizen are also called as first class function


// Arrow Functions => are comes under the ES6 or emga script
