//simple use Recution

/*const checkOddNumber =(n)=>{
n--
console.log(n)
if(n>0){
  checkOddNumber(n)
}
return n
console.log(checkOddNumber(10));
}*/


// use Recution
/*const sumRecurtionAll = (n)=>{
if(n < 0) return 0
return n + sumRecurtionAll(n-1);
}
console.log(sumRecurtionAll(10)) */
//check odd Number

//Complexity and space_complexity check
// sumOfArray data
const sumOfArraySlow =(arr)=>{
  if(arr.length === 0) return 0;
  let rest = arr.slice(1); //time_complexity o(n)
  return arr[0] + sumOfArraySlow(rest); //time_complexity o(n)
}
//time O(n2)
//space_complexity 0(n)
//this problem solved now...

 const sumOfArrayFirst = (arr,i
 )=>{
   return hellperSum(arr,0)
 }
 const hellperSum =(arr,index)=>{
   if(arr.length === index) return 0
   return arr[index] + hellperSum(arr,index + 1)
 }
 
 //performance check 
 const arrayInput = new Array(900).fill(1)
 const curentDate = new Date();
 console.log(sumOfArraySlow(arrayInput))
 const end = new Date();
 const slowTime = `sumOfArraySlow call time:  ${end - curentDate}`
 console.log(slowTime+'ms')
 const curentDateTwo = new Date();
console.log(sumOfArrayFirst(arrayInput))
const ends = new Date();
const firstTime = `sumOfArrayFirst call time :${ends - curentDateTwo}`
console.log(firstTime+'ms')