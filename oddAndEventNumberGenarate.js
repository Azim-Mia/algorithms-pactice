const evenNumbers = (arr) => {
  const r = arr.indexOf(7)
  console.log(r)
  let arrTwo = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrTwo.push(arr[i]);
    }
  }
  const sortValue = arrTwo.sort((a, b) => a - b); 
  return sortValue;
};
console.log(evenNumbers([2,1,4,6,4,3,7,8,9,10]))

