function x() {  // function
    var a = 7; // lexical -scope
    function y() { // block
        console.log(a); // block-scope
        // output is 7
    }
    y(); // function call or invoke a function
}

x(); // function call

// what is closure ? --> function along with the lexical scope is called closure
//  what is lexcial scope --> where the block scope in side another block scope which access nearsty value. 

// you can pass the arugment nested function through the arugment

function x(){
    var a = 7;

}

x(function y(){
  console.log(a); // o/p is 7

});

// we can return the function from out of the function,

function x(){
    var a = 7;
    function y(){
        console.log(a);

    }
    return y;
}
var z = x();
console.log(z);
z() // 7 --> how the 

// the o/p of this code  f y(){console.log(a);}

// even this code can write in this format

function x() {
    var a = 7;
    return function y () {
        console.log(a);
    }
    
}

var z = x();
console.log(z);
z();

//  ===========corner cases===========
 function x(){
    var a = 7;
     function y(){
        console.log(a);

     }
     a = 100;
     return y;
 }

 var z = x();
 console.log(z); // 100 how it calls the refrences variable which is a
 z(); 

//  nested inside two function

function z(){ // --> closure z becoz of two function inside with one lexical scope
    var b = 900;
    function x() {  // closure x
        var a = 7;
        function y(){
            console.log(a,b);

        }
        y(); // invoke function
    }
    x(); // invoke function

}

z(); // invoke function


// uses of closures:

/* 
 --> Module design pattern
 --> currying
 --> functions like onces
 --> memorize
 --> maintaining state in async world
 --> setTimeouts
 --> iterstors
 --> 


*/
