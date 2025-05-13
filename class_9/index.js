//big o nution bebohar Object
// exampul -1
const myObject ={
  channel:"code ABC",
  instuctor:"Azim Islam",
  videos:"bd news"
}
console.log(Object.keys(myObject)) //big o(n)
console.log(Object.values(myObject)) //big o(n)
console.log(Object.entries(myObject)) //big o(n)
console.log(myObject.hasOwnProperty("channel")) //big o(1)

//kono array theke 1st index jodi add abong remove kori tahole TimeComplexity kemon hobe niche dekhano holo
let myArray =['a','b','c','d','e'];
myArray.unshift('f');
console.log(myArray)