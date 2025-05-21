const selectionSort =(arr) =>{
  for(let i =0; i<arr.length; i++){
    let lowest = i;
    //more Iterator 0 index asbe 
     for(let j = i+1; j<arr.length; j++){
       // 0+1 index theke suru
       // i akbar hole j hobe arr.length
       console.log(i,j)
    if(arr[lowest] > arr[j]){
      lowest = j;
    }
  }
  let temp=arr[i];
  arr[i] = arr[lowest]
  arr[lowest] = temp
  }
  return arr;
}
console.log(selectionSort([7,12,-3,23,3]));