const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // use floor for consistency
    if (arr[mid] === value) return mid;
    if (value > arr[mid]) {
      start = mid + 1; // fix: use mid, not arr[mid]
    } else {
      end = mid - 1;   // fix: use mid, not arr[mid]
    }
  }
  return -1;
}

console.log(binarySearch([3, 4, 5, 6, 7, 8, 9, 10], 8)); // Output: 2
