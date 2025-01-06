
//  what is block in js --> let and const are block in js

/*{ --> this parathensis are called as block
    // compound statement
    var a =10;
    console.log(a);

}

*/

// if(true) --> it is crt syntax for the if keyword 
// if (true) console.log('ddsfads');

if (true){
    var a = 10;
    console.log(a);
    // here if keyword after we want on write mutiple statement to excute this code becoz used this block
}

// block - scope ==> what are the variable and function inside this function are called as block-scope becoz they are stored in the different memory spaces in the reserverd area.


{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 20
}
    console.log(a); // 10
    console.log(b); // uncaught references error b is not defined
    console.log(c);
//  when we see that in the debugger it have the b and c are hoisted which means undefined
// when can access the var outside the scope becoz it have global scope but we cant acess the let const outside of the scope becoz it block scope


// ======= Shadowing using var , let, const ================

var a = 100;

{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
    console.log(a); // 10 

// shadowing which mean refrences same memory location
// for example var a = 100 , it the global scope , you see that same variable name in the block scope var a =10 
// note that console.log(a); it will be 10 becoz the final refrences memory is 10

let b = 100;
{
    var a =10;
    let b =20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
    console.log(b); // 100

// but in the case of let it difference , when you debugg you can see let in the script not in the global scope becoz it place outside of the block it references script(allocate the different memory space)
// smiliar thing happens for the const

//  using shadowing in the function

const c = 100;

function x(){
    const c = 30;
    console.log(c); // 30
}
x(); // this function invoke which means call the function name

console.log(c); // 100


// =========illegal shadowing=============

let a = 20;
{
    var a = 20; // uncaught syntax error : identifier 'a' has already has ben declared
}

//  we can only shadowing using let to let

let a = 20;
{
    let a = 20;

}

// we can shadowing var to let it is perfectly valid

var a = 20;
{
    let a = 20;

}

// incase using function
 
let a = 20;

function x() {
    var a = 20;

}

// this is not illegal shadowing because var are in the function boundary it will affect to the let it is not illegal shadowing


// ==========Block scope also follows lexical scope ============
// which means it access the value in the nearest


const a = 20;   // script
{
    const a = 100; // block 
    {
        const a = 200; // block - scope
        console.log(a); // 200
    }
}

