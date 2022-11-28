//? Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let numList = [1,2,3,4,5,6,7,8,9];
let abcList = ["a","b","c","d","e","f","g","h","i"];
let mixList = [];

console.log(numList);
console.log(abcList);

for (let i = 0; i < abcList.length; i++) {
  mixList.push(numList[i] + abcList[i])
  
}

console.log(mixList);