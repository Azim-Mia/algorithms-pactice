const bubbleSearch =(arr)=>{
  for(let i=0; i< arr.length; i++){
    for(let j=0; j<arr.length - i -1; j++){
      console.log('to see:',arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        //swoap kora holo
      arr[j] = arr[j+1]
      arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSearch([8,2,6,10,3]));