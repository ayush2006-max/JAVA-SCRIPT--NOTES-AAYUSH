// functions
   function myname(){
    console.log("a");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}
myname()

// exute function= myname() = output ajyega

// ading 2 numbers
   let a = 10;
let b = 20;
console.log(a+b);
// ading 2 nums vai function

function add(num1, num2){ // paremters
    console.log(num1+num2);
}
add() // output = nan

add(10,20) // 30= output
add(10,"30") // 1030= output
add(10,"a") // 10a= output
add(10,null) // 10= output // arguments hai
add(null,"1") //  null1 = output
add(null,null) // 0 = output



// diff aproch
function ccc(num1,num2){
    return num1+num2

}
 agc= ccc(10,40)
console.log(agc); //; 50 = output



// print diffrent way = `${varible name} messge to show `
function loginusermessage(username="sam"){
    if(username==undefined){
        // if(!username)= diffrent way to check if username is undefined
        console.log("plese enter username");
        return
    }
    return`${username} just logged in`
}
console.log(loginusermessage());
console.log(loginusermessage("ayush")); // ayush just logged in = output 


//++++++++++functions part 2 +++++++++
// shoping cart,rest opretor=...num1 = output= jo vi hoga box me sb ayega

function cartprice(num1){
    return num1
}

console.log(cartprice(10,20,39));// 10 = output
function cartprices(...number1){
    return number1
}
console.log(cartprices(10,20,39)); // [ 10, 20, 39 ] = output



// diff way function
function dost(val1,val2,num1){
    return num1
}
console.log(dost(10,20,30,40,50)); // 30 = output
function dost1(val1,val2,...num2){
    return num2
}   
console.log(dost1(10,20,30,40,50)); // [ 30, 40, 50 ] = output
function dost2(val3,val4,num3){
    return val3,val4,num3 // js me multiple value return nhi kar sakta hai, last value return hogi

}
console.log(dost2(10,20,30,40,50)); // 50 = output

// retrun multiple value in function
function dost3(val5,val6,num4){
    return [val5,val6,num4] // array me return kar sakte hai
}   
console.log(dost3(10,20,30)); // [ 10, 20, 30 ] = output

// pasing object in function
let user = {
    id:"aayush",
    password:"1234"
}
function applogin(anyobject){
    console.log(anyobject.id);

}
applogin(user) // aayush = output 




