const bubbleSearchOptimize =(arr)=>{
  let isSwap;
  for(let i=0; i< arr.length; i++){
   isSwap =false;
    for(let j=0; j<arr.length - i -1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        //swoap kora holo
      arr[j] = arr[j+1]
      arr[j+1] = temp;
      isSwap=true;
      }
    }
    if(!isSwap) break;
  }
  return arr;
}
console.log(bubbleSearchOptimize([8,2,6,10,3]));