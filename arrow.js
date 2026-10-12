// this = reffer current context
let user = {
    username : "ayush",
    price:100,
    welcome:function(){
        console.log(`${this.username},welcome to website`)
    }
}
user.welcome()
user.username="rohan"
user.welcome()


// this only use in objects or globel scope cant use in function 

// arrow function 
let chai = () =>{ // explicit return
    var x = 54;
    var y = 55;
    return x+y;
}
console.log(chai()); // output = 109

// diff way of writing code in function
let chai2 = (num1, num2) => (num1 + num2) // implicit return cant use {} in implicit return
console.log(chai2(54, 55 )); // output = 109
