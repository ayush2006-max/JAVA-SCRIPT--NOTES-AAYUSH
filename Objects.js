//objects
const jsuser = {
name:"ayush",
addres:"delhi",
"full name": "aayus tiwari",
age :19,
isloggedin: false,
}
// 2 ways of acces value of object
//1
console.log(jsuser.name);//output="ayush"
//console.log(jsuser."fullname")error beacuse in js space in varibale not allowd so in spcae vrr use 2nd way to acces

//2nd way
console.log(jsuser["name"]); // name in "" cuase js treats keys as string
console.log(jsuser["full name"]);// output = "aayus tiwari"



//++++++ ""take symbol and use as a key"""+++++++++++
let mysymbol = Symbol("key1")
const jsuser2 = {
  mysymbol : "key1",//datatype string
  [mysymbol] : "key1", // datatype is symbol beacuse symbol define in[]
}
console.log( jsuser2.mysymbol);//output = "key1" but its not symbol its datatype is string
console.log(jsuser2[mysymbol]);//output = "key1" datatype is symbol can check


// change value
jsuser.name = "rudransh"
console.log(jsuser.name); // "rudransh " chnaged

// want no changes in object than "freeze" object
// Object.freeze(jsuser) now object values can,t change
console.log(jsuser2);

//functions in object








