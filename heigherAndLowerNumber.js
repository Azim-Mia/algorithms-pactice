// Mantain 4 concept
// 1.Understand the problem
// 2.break it down
// 3.Solved the simplify
// 4. Refactor the problem

// This arrsy mix number String
//iterate count number
const myArray = [2,-2,4,34,-4,"error",34,8,-8,9];
//heigher nimber abong lower number bahir koro
const problemSolved =(arr)=>{
  //lower number decliay
  let lower = arr[0];
  //heigher number decliay
  let heigher= arr[0];
  for(let i=0; i<arr.length; i++){
  if(typeof(arr[i]) !== 'number') continue;
    if(lower > arr[i]){
      lower = arr[i]
    }
      if(heigher < arr[i]){
      heigher = arr[i]
    }
  }
console.log('heigher = ', heigher, 'lower = ',  lower)
}
problemSolved(myArray)