// what is call back function in javascript?

// a function pass another pass function is called call back function

function x(){
    
}
x(function y(){

})

// which y function gave the responsibility to the x function

// call back function acts as asynchronous 
// setTimeout is a asynchronous operator it  will excute only in the call back function 

setTimeout(function(){
    console.log("timer");
},5000);

function x(){
    console.log("x");
   y();
}
x(function y(){
    console.log("y")
})

/* 
Explanation initially the setTimeout excuted after that it move to the function x , you see the invoke function which inside the y function then y() invoke function place in the x , then after the 5sec it place the output x,y,timer
*/

// javascript is a synchronous and single-threaded language which means excuted line by line
