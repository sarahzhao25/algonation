function LIS(arr) {
  //aim is dynamic programming.
  //You can have an object that stores the number as a string? and then store the length of its possible subsequence.
  let memo = {};
  for (var i = 0; i < arr.length; i++) {
    memo[arr[i]] = 1;
    for (var j = 0; j < i; j++) {
      //if the number in the array we are looking at is bigger than the jth number, which are all indices before i
      if (arr[i] > arr[j]) {
        //if arr[j]'s number is >= arr[i]'s number, then we add arr[j] + 1;
        if (memo[arr[j]] >= memo[arr[i]]) {
          memo[arr[i]] = memo[arr[j]] + 1;
        }
      }
    }
  }
  return Math.max(...Object.values(memo));
}

console.log(LIS([3, 10, 4, 5]));
console.log(LIS([10, 22, 9, 33, 20, 50, 41, 60, 80]));
console.log(LIS([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]));
