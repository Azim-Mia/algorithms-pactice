//Example-1 big o(log n)
const logarithms = (n)=>{
  while(n > 1){
    console.log(n)
    n /= 2
  }
  console.log("Done")
}
logarithms(16)

//Example-1 big o(log n)
const logarithmsTwo = (n)=>{
  if(n <= 1){
    console.log("Done")
    return;
  }
  console.log(n)
  logarithmsTwo(n/2)
}
logarithmsTwo(8)
