// [2,4,6],[4,16,36] = true
// [2,4,6],[4,16,6] = false
// [2,4,6],[4,16] = false
const same =(arr1,arr2)=>{
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i=0; i<arr1.length; i++){ //big O(n)
  const currentIndex = arr2.indexOf(arr1[i] ** 2) // big O(n)
   if(currentIndex === -1){
     return false;
   }
 arr2.splice(currentIndex,1)
  }
  return true;
}
// n*n= n2 
//this code is not good
console.log(same([2,4,6],[4,16,36]))

//time Complexity change change
// good code 
const sameCheck2 = (arr1,arr2) =>{
  if(arr1.length !== arr2.length){
    return false;
  }
  let secquenceCount1 = {};
  let secquenceCount2 = {};
  for(let val of arr1){
    //console.log(val)
    secquenceCount1[val] = secquenceCount1[val] + 1 || 1;
  }
  for(let val of arr2){
  secquenceCount2[val] = secquenceCount2[val] + 1 || 1;
  }
  for(let key in secquenceCount1){
    if(!(key ** 2) in secquenceCount2){
      return false;
    }
    if(secquenceCount2[key ** 2] !== secquenceCount1[key]){
    return false
  }
  }
  return true
}
console.log(sameCheck2([2,4,4,6],[4,16,16,36]));