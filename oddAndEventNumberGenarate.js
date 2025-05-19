const evenNumbers = (arr) => {
  let arrTwo = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrTwo.push(arr[i]);
    }
  }
  const sortValue = arrTwo.sort((a, b) => a - b); 
  return sortValue;
};
//this function problem solved timecomplexity and spacecomplexity

const evenNumberTow = (arr)=>{
  let result = [];
  const helperFun =(input)=>{
     if(input.length === 0) return 
    if(input[0] % 2 === 0){
      result.push(input[0])
    }
    helperFun(input.slice(1))
  }
  helperFun(arr)
  return result;
}
// chack time complexity between two function 

const t1 = new Date();
console.log(evenNumbers([2,1,4,6,4,3,7,8,9,10]))
const e1 = new Date()
const cxiQuteT = `function test One: ${e1 - t1} ms` 
console.log(cxiQuteT)
const t2 = new Date();
console.log(evenNumberTow([3,45,34,40,5]))
const e2 = new Date()
const cxiQuteT2 = `function test Two: ${e2 - t2} ms`
console.log(cxiQuteT2);
