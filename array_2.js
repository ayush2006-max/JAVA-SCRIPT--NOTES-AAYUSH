//push = jb aap kisi vi chez ek array me push krte vo usko ek valu man ke array me add krta 
// orignal array change hojata push use krne ke bad
 let vv = [1,2,3]
 let ww = [4,5,6]
  vv.push(ww)
console.log(vv);

//concat = add 1 array in another and make big array and oringal array change ni hota
let cc = [11,12,13]
let dd = [14,15,16]
let  cd = cc.concat(dd);
console.log(cd);

// spred = ...v1_..._v1 = output v1,v2
 let a1 = ["as","ss "]
let a2 = ["rohan","sohan "]
let a1a2 = [...a1,...a2] // spred ko aise use krte hao
console.log(a1a2);

// deling multiple array in 1 array
let arrx = [1,2,3,[4,5],[3,4,5],65,[44,45,46],88,[1,2,3]]
let bigarrx = arrx.flat(Infinity)
console.log(bigarrx); 

//anything to array
console.log(Array.from("ayush"));

// multipe var into arr
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));// output = [100,200,300]













