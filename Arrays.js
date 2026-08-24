//Arrays = can add diff datatypes in arrays, resize
// index in array starts from 0 

let xt = [4,"aalu",true,54]

// acces item = index se acces kr skte
console.log(xt[1]);

// +++++++++++++ arrays methods +++++++++++++

// add elemnt in array = push
xt.push(7,) 
console.log(xt); // output 4,aalu,true,54,7

// remove last val of array = pop
xt.pop()
console.log(xt);

// add something in start of array = unshift
xt.unshift(9);
console.log(xt);

//remove fist item  = shift
xt.shift()
console.log(xt);

// check item in array = includes
// check for 45
console.log(xt.includes(45)); //  output false becaus 45 not exixt in array

// check item index  = indexof
// 2 cases , c1 if item present = gives value of index
console.log(xt.indexOf(54)); // 

// c2 if item dosent present = gives -1
console.log(xt.indexOf(89)); 

// array form in string = join
 newarr  =  xt.join()
console.log(newarr);









 



 
 