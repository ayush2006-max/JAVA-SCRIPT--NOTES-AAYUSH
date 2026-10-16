//for of = condtions ni likhni pdti
arr = [1,2,3,4]
for (const element of arr) {
    console.log(element);
    
}
//prinnt each carr od string
let x = "aayush ji";

for (const element of x) {
    console.log(element);
    
}


//Maps
const map = new Map();
map.set('IN','INDIA');
map.set('USA','america');
map.set('uk','london');

console.log(map);




// array loops
const coding = ["html","css","js","react"]
coding.forEach(function(val)
{
    console.log(val);
}
)


// objects of array ka loops
const mycoding = [
    {
        langname:"python",
        langfile:"py"
        
    },
    {
        langname:"java",
        langfile:"js"
    },
]
mycoding.forEach(function(val){

console.log(val.langname);


}
)




