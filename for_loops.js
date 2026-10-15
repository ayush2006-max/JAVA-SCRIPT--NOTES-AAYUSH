// for loop/*
/*
let index;
for (index=1; index<10; index++) {
    if(index==5){
        console.log("5 is found");
    }
    console.log(index); 
}
    

for (let i=0; i<10; i++) {
    console.log("outer val",i);
    for (let j=0; j<5; j++) {
        console.log("inner val",j);
    }
}
    
   let arr = ["apple", "banana", "cherry", "date"];
   for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
   }


//break
for (let i=1; i<=20; i++) { 

    if(i==10){
        console.log("10 is found");
        break
    }
    console.log(i);

}

//continue= jiske nam pr contiue lgea uslo skip krna hai
for (let j=1;j<=20;j++){
    if(j==17){
        console.log("17 is found");
        continue;
    
    }
    console.log(j);


}
 

for(let i=0;i<5;i++){
    console.log("hello");

    
}  */
 let i=1;
while(i<=5){
    console.log("hello");
    i = i+1;
}