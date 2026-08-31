let tinderuser = new Object() // singleton object 
let instauser = { // non singleton object  
name:"rahul", // 
ctt:"india",// [,=important]

} 
// def mutiple key vals in object
tinderuser.name = "ayush tiwari"
tinderuser.id = "ayush_tiwari2006"
tinderuser.email = "ayushtiwari.tiwari20@gmail.com"

console.log(typeof tinderuser); 
console.log( tinderuser );
console.log(instauser.ctt);

// multiple objects

let devlopment  = {
    webdev : {
        frontend :{
        nextjs : {
            aalu : "ayush",
            kachalu : "shivam",
        }
    }

    }

}
console.log(devlopment.webdev.frontend.nextjs);


//combining objects
let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}
let obj3 = {obj1,obj2}
console.log(obj3);   // bekar

//assign = convert 'n'obj in 1 new obj
let objA = Object.assign({},obj1,obj2) // {}= optional
console.log(objA);

 // spred= ...obj1,...obj2
 let objB= {...obj1,...obj2}
 console.log(objB); //best for combining

 // multiple obj in  array
 // jha pr : ye use krtr end me , ise use krte
 // jha pr = ye krtr vha end me ; ise use krte
 const server = [
    {
    id:1,  
    email:"ayush@gmail.com",
    },

    {
    id:2,  
    email:"ayuh@gmail.com",
    },

    {
    id:3,  
    email:"ayh@gmail.com",
    },
]
    
    server[1].email //


    // wann all keys of particulur object
    console.log(Object.keys(tinderuser)); // output datatype is array


    // wann all values of particulur object
    console.log(Object.values(tinderuser)); // output datatype is array

    // wann every key value pair in single array = entries
    console.log(Object.entries(tinderuser));
    
    
    

    

    

    




 
  
 











