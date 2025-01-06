/* 
What is a Temporal Dead Zone?

let & const declarations are Hoisted?

*/

// ======= this is hosting

// console.log(b); // the output is an undefined

// let a = 10;
// var b=100;
// =========================== what if an console.log(a);

console.log(a); // the o/p cannot access a before initialization
let a= 10;
// console.log(a) we can access the let after the let
var b = 100;

/* 
explantion --> u see the console script  and global {note: before use that global only now we using the let and const it create the script}

so how you say it is hoisted --> when var b allocate the memory space and attached to the global object, but incase let and const they also allocated the memory (hosited) in the different we cannot access the memory space before intilaization.

so now tell that what is temporal dead zone --> the memory were allocate to the let and const before the value declaration(undefined which is {hoisted}) after assign value to the variable were to time between to the hosited (undefined) and value which is called as temporal deadth zone*/


/* 
if we try to access let , const  through the global object or{ window or this keyword}

window.a -> undefined
this.a -> undefined
window.b->100
this.b -> 100

*/

/*
note the when we duplicate the(let) 
 let a=10 
 let a= 10; o/p --> it shows an syntax error but before see you refrences error (becoz let is strict) 
 
 incase of var we can duplicate
 var b = 100;
 var b = 1000; 
 */

//  Note that const is more strict than the let becoz in the let you can assign the variable later but in the not possible it shows an error

let g;

b = 1000;
console.log(b); // 1000
const n =1000;
console.log(n) ;
const o;
o = 300;
console.log(0); // it show an syntax Error missing initializer on const declaration

// if we try to access later on the b it show an typeerror

const n = 1000;
n = 1000;
// it show an typeerror assignment to constant variable (it mean if we declare the const we initialize the value )

// const b: --> it is syntax error(initialize missing)
// no duplicate declare.

// we should declare the before the let it show an references erro cannot acess 'a' before the initializer

//  we can use only let and const 
// to avoid the temporarl death zone initial the let and const at the top




