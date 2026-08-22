 // for offical documentation vist  mdn webiste
 let name = "aayush "  ;
let age = 19;
//console.log(name +  age); // dont use thi way
// use `  ` this and for inject varible ${}
console.log(`my name is ${name}and my age is ${age}`); // output my name is aayush and my age is 19

// string methods

let gick = "rockstar";
console.log(gick[1]); // output o
console.log(gick.length); // output 8
console.log(gick.toUpperCase()); // output ROCKSTAR
console.log(gick.charAt('2'));// output c
console.log(gick.indexOf('a'));// output 5

// substring 
// sustring me negative index nahi use kar skte
const bt = gick.substring(0,2) // 0,2 o se 1 index print hoga last index not include
console.log(bt); 

//slicing
// slice me negative index use kar skte h
// important note
/* js me positive side se 0 se start hota
and negative side se -1 se start hota h  */
// so 0 == -n
let axc = gick.slice(-8,1)
console.log(axc); 
// trim  = remove extra space from start and end of string
let str = "   aayush  ";
console.log(str); // output    aayush , extra space
console.log(str.trim()); // output aayush  , no extra space
// replace

const url = "https://www.googlec-om";
console.log(url.replace('-om', '.com')); // output https://www.google.com
// includes find some keyword in string
conole.log(url.includes('google')); // output true
conole.log(url.includes('aalu')); // output false









 



 