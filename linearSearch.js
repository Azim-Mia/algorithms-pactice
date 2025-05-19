//linear search sequence area search data
const linearSearch=(arr,value)=>{
  for(let i=0; i<arr.length; i++){
    if(arr[i] == value){
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([3,3,4,7,3,2,5,5],7))