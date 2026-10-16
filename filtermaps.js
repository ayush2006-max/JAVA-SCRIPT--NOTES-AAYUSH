//filters
const numbers=[1,2,3,4,5,6,7,8,9,10];
const newnumbers = numbers.filter((num)=>num>4)
console.log(newnumbers);

// filter ka sahi use


const cars = [
    {name:"baleno",type:"htachback",brand:"maruti"},
    {name:"swift",type:"htachback",brand:"maruti"},
    {name:"i10",type:"htachback",brand:"hyundai"},
    {name:"santro",type:"htachback",brand:"hyundai"},
    {name:"xuv700",type:"suv",brand:"mahindra"},
    {name:"scorpio",type:"suv",brand:"mahindra"},
    {name:"harier",type:"suv",brand:"mahindra"},
    {name:"safari",type:"suv",brand:"mahindra"},
]
let vahan = cars.filter((car)=>car.type==="suv")
console.log(vahan);

 vahan = cars.filter((car)=>car.brand==="mahindra")
console.log(vahan);


// 2 filters in combination
vahan = cars.filter((car)=>car.brand==="mahindra" && car.type==="suv")
console.log(vahan);


//change arrays using map
let conts = [1,2,3,4,5,6,7,8,9,10]
let conts1 = conts.map((num)=>num+5)
console.log(conts1);



// chaining = map and filter ko ek sath use krna ya 2 times map ya filter use krna
let av = [11,12,13,14,15]
let av1 = av.map((num)=>num+5).map((num)=>num*2).filter((num)=>num>32)
console.log(av1);



// reuduce = array ke sare element ko ek single value me convert krta hai
let nuu = [1,2,3]
let mnus=nuu.reduce((accumulator,currentvalue)=>accumulator+currentvalue,7)
console.log(mnus);