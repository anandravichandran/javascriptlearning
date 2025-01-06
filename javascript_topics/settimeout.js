//  set timeout + closures 

function x(){
   // var are function-scoped,
    var i = 1; 
    setTimeout(function (){
        console.log(i);

    }, 3000);
    console.log("tevexxo");
}

x(); 

/// o/p is tevexxo then it print 1

//  how --> initially it will excute the function then it will excute settimeout due to the timer 3000 js doesnt wait for anything
//
 
function x() {
    for (var i =1; i<=5; i++){
        setTimeout(function(){
            console.log(i);

        },i * 1000);  // using it will refrences same memory location
    }
    console.log("hello");

}
x()

// ========================

function x() {
    for (var i = 1; i <= 5; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        })(i); // using different memory location
    }
    console.log("hello");
}
x();

// hello
// 1
// 2
// 3
// 4
// 5

// using let 

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000); // but here it refrences same memory location
    }
    console.log("hello"); 
}
x();

// =================

function x(){
    for(var i =1; i<=5 ; i++){
        function close(){
            setTimeout(function(){
                console.log(i);

            }, i*1000);
            close(i);
        }

    }

}

// setTimeout ==> is built -in javascript function that allow you to excutes a peices of code after a specific delay
// syntax:

/* 
setTimeout (function,delay,arg1,ag2,..);

The function to be executed after the delay, this can be anonymous function, a named function, or arrow function

delay--< The time in milliseconds to wait before executing the function.

arg1, arg2, ...: (Optional) Additional arguments that can be passed to the function when it is executed.

Asynchronous Behavior: setTimeout is non-blocking, meaning that it allows the rest of the code to run while waiting for the specified delay.

*/


console.log("Start");

setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");

// ============================


const timeoutId = setTimeout(() => {
    console.log("This will not run");
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout

// Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more succinct syntax compared to traditional function expressions.
 
/* 
syntax:

const functionName = (parameter) => {
    // function body
    };


 Concise Syntax:
    If the function body contains only a single expression, you can omit the curly braces and the return keyword. 

    const add = (a,b) => a+b;

    single Paramater

    const add = x => x*x;
*/