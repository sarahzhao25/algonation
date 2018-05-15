function maxSumIncreasingSubsequence(array) {
  let prevIndices = new Array(array.length), maxSum = array.slice(), returnArr = [], startIndex = 0;
  //run through the array the first time
  for (let i = 0; i < array.length; i++) {
    //run through the array of increasing sums up to that point
    for (let j = 0; j < i; j++) {
      let sum = maxSum[j] + array[i];
      if (array[j] < array[i] && sum > maxSum[i]) {
        maxSum[i] = sum;
        prevIndices[i] = j;
      }
      if (Math.max(...maxSum) === maxSum[i]) startIndex = i;
    }
  }
  while (startIndex >= 0) {
    returnArr.unshift(array[startIndex]);
    startIndex = prevIndices[startIndex];
  }
  return [Math.max(...maxSum), returnArr]
}

maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])//should return [110, [10,20,30,50]]
