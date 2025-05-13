/*time complexity and space complexity simple discutions*/
const uniqucName = (arr)=>{
  let chackDubbleName = [];
  for(let i = 0; i < arr.length; i++){ //time complexity big 0(n2)
    let els = arr[i];
    if(!chackDubbleName.includes(els)){
      chackDubbleName.push(els)
    }
  }
  return chackDubbleName; // space complexity big o(n)
}
let nameArray = ['azim', 'karim','azim','millon','piyas','azim'];
console.log(uniqucName(nameArray));
//time complexity big 0(n2)
// space complexity big o(n)
//Note : big o(n) holo input barle time barbe
// Note: (n2) ai nutation time onek barbe