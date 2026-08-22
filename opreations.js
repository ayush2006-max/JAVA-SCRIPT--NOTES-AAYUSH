// OPREATIONS IN JAVASCRIPT

// jb do data types ko add kraoge toh js 1 vala type ki trah 2 data types ko treat krta h

// primitive data type  string, number, boolean, undefined, null, bigint, symbol

// non-primitive data type  object, array, function

// array  , data type of array is object, array is a collection of data
/*let arr = [1, 2, 3, 4, 5];
// object {} iske andar ka mall object hai
let obj = { 
    name: "Rahul",  
    age: 25 ,
 }
 // function
 console.log(typeof arr);   */

 // MEMORY
 // 2 types = stack(primitive data type) and heap(non-primitive data type)
 // simple si  baatt   stack ke andr jb hm  copy me chnage krte orgnal can't change
 // heap ke andr jb hm copy me chnage krte orgnal bhi change ho jata h  

 // eg of stack 

 let name = "Rahul";
 let anothername = name;
 anothername = "Rohit";
 console.log(anothername); // output  rohit
 console.log(name); // output  rahul cus static me oringal value change nahi hoti   

// eg of heap
let obj1 = { name: "Rahul", age: 25 };
let obj2 = obj1;
obj2.name = "Rohit";
console.log(obj2.name); // output  rohit
console.log(obj1.name); // output  rohit cus in heap original value also changes




