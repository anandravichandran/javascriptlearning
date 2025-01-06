
// 1.function syntax 
// function functionName(){};

// let a = 7;

// function getName(){
//     console.log("Nalla padikanum");

// };
// =======================================

//2.function type in hoisting

// getName();

// console.log(a); ======> type 1

// getName();
// console.log(x);
// var x = 14;
// function getName(){
//     console.log("Nalla Padikanum");

// }
// the o/p of the code --> Nalla Padikanum and show an error becoz we defined x before the log
// you see the code var x = 14, it shows an undefined but in the let show not defined
// is the not defined and undefined are same noo

//3. function in hoisting

// var x = 7;

// function getName(){
//     console.log("learn javascript");
// }

// getName();
// console.log(x);
// console.log(getName);


//  even code is start the code is allocate the memory for the function and variable,

/*============================

Shortest Javascript
------------------
* Often depends on the specific task , the shortest possible in an empty file.
* Creating the Global execution context. this context is the enivronment where the code excutes
* Setting up Global Memory
* Allocating memory for global variable functions
*** Creating the Global Object
=> In a browser environment this is the window object which provied access to various built-in functions and properties

example : alert ('hello world');

this === window
whenever we created the execution context along with that this keyword is created,even for the functional execution context and even for global execution context,
that is window in case of object

*/

var x = 1;

console.log(x);
function a (){
    var x = 29;
    console.log(x);


};
a() // this is a invoke a function or declare the function name;

function b(){
     var x = 100;
     console.log(x);
}
b() // this is a invoke a function or declare the function name;

// ========================

// when any value  function inside the are known as global space and any value outside the function are known a local space

var a_1 = 10; // this is global space
function b_1(){ // b is the global spac
    var x_1 = 10; // x is the local space
}
console.log(a_1);
console.log(x_1);
console.log(window.a_1);
console.log(this.a_1); // this === window
// note when we try acces the local variable (x_1)  it show an error incase when try to globalvariable inside the local console.log it doesnt show an error

// =====================================
var a;
console.log(a);

a= 10; // if we comment this shows undefined otherwise it will not shows



if(a === undefined){
    console.log("a is an undefineds");
} 
else {
    console.log("a is not undefined")
}

//console.log(x); // here is x not defined


/*
javacript is more flexible and fesible, looselyn  type language becoz

var a;

console.log(a);

a= 10;

console.log(a);

a = "hello world";

console.log(a);

you see that a variable occupy string, integer
*/

// ====================================

/* 
---> The Scope Chain,

** were we can access specific function inside or outside the function are called scope
** scope is depend on  lexical enviromenet,
 .. lexical enviromenet with local memory along with the parent memory
 >> so what is lexical enviroment --> is herical or sequences 
type:1

function a() {
     
     console.log(b);
     function c(){
     console.log(b);
     
     }
}
var b = 10;
a();

-------------------------

type: 2

function a(){
      var b = 10;
      c();
      function c(){
      }
}
      a();
      console.log(b); // it shows an error b is not defined i already mention that we can access global variable var b = 10; to access to the inside local variable console.log(b); , but we cannot access from console.log(b) global function to the  local function var b = 10; 

      ------------------------
      
      call stack --> inside the call stack use above is a scop below global exceution context that use see the memory phase and code phase
       ==> in memory phase ... a: {..}  in code phase ... 
       @ next step create the execution context function a invoke .. what is function invokecation it lies above or below function what lies above or below is console.log() and function name()
       ==> in memory phase .. b:10 c:{..}
       @ next step create the execution context function in a invoke..
       ==> in memory phase .. c:{..}

       you can see that a inside in the function of c  so c is lexical enivorment to the a and a lexical enivronment to the  global level have  lexical enviroment it leads to the null

*/

/* 

===>  Let , const, The temporal Dead Zone

==> Block Scope & Shadowing

==> closures
--> crazy interview
---> First class Function
---> Event Loop
---> Js Engine
---> setTimeout()
---> Higher Order Function
---> map() filter() reduce()
----> callback()
---> promise()
---> promise chain
---> promise APIs
---> async await
---> this keyword

===> blind()
===> Debouncing vs Throtttling
===> call,apply, blind
===> currying
==> async vs defer
==> event bubbling , capturing
==> event delegation
==> prototype and prototype Inheritance
==> local storage and session storage


=========================> after that complete have to see the chrome dev tools and  APi

*/
