// amra ja shikhci ta holo o(1), O(n), O(n2)
//  ai tutoria a amra janbo O(log n)
//RECAP
// রিক্যাপ
// একটা এলগরিদমের পারফরম্যান্স নির্ণয়/বের করার জন্য আমরা Big O Notation ব্যাবহার করতে পারি
// টাইম কম্প্লেক্সিটি এবং স্পেস কম্প্লেক্সিটি নির্ণয়ের জন্য Big O Notation আমাদের সর্বোচ্ছ স্বাধীনতা দিয়ে থাকে
// টাইম কম্প্লেক্সিটি এবং স্পেস কম্প্লেক্সিটি পরিমাপ করা হয় Big O Notation এর মাধ্যমে

//Example-2 big o(log n)
const logarithms = (n)=>{
  while(n > 1){
    console.log(n)
    n /= 2
  }
  console.log("Done")
}
logarithms(8)
//Example-2 big o(n2)
const logarithmTwo =(n)=>{
let arr = [];
  for(let i=0; i<n; i++){
    console.log(n)
  n/=2
arr.push(Math.floor(n))
  }
console.log(arr)
}
logarithmTwo(10)