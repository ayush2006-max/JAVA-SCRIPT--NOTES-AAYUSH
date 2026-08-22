
// data types
// var can re-declared and re-assigned
 var m = 10;
 var m = 20;
 // let can be re-assigned but cannot be re-declared
 let g = 10;
 let g = 20;
 // const cannot be re-assigned and cannot be re-declared
 const h = 10;
 const h = 20; 
 console.log(m);
 console.log(g);
 console.log(h); 

 //
 {
    
    var ro = 32;
    // you can't use let and const outside the block scope={}
    let rr = 30;
    const ew = 23;
 }
 console.log(ew ,rr,ro);   

 if (true) {
    var ro = 32;
 }
 console.log(ro);  
 
 let a = "Hello";
let b = 25;
let c = true;
let d;
let e = null;
let f = 123n;
let g = Symbol("id");
let h = { name: "Rahul" };

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h); 
let a = "10";
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


 console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));  // bolean value of null is false 
console.log(Boolean(undefined)); //true  

let a; // type of undefined is undefined
let b = null; // type of null is object

console.log( typeof a);
console.log(typeof b);

//console.log(typeof a);
//console.log(typeof b);

console.log(  a == b);
console.log(a === b);

// == ye value compare krta hai or agr data type alg hua to chnage kr dega fir true pint krega
// === ye value or data type dono compare krta hai or agr data type alg hua to false print krega







