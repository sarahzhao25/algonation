function maxSubArray(arr) {
    var maxSum = 0, currSum = 0; //holds the potentially maximum sum, and the current sum;
    var startIndexCurr = 0, endIndexCurr = 0; //indices of the current sum;
    var startIndexMax = 0, endIndexMax = 0; //indices of the potentially maximum sum;
    arr.forEach((elem, index) => {
      //if the current sum + the new element is <= 0, reset the current to start at the next positive sum, or reset the current sum to 0;
      if (currSum + elem < 0) {
        currSum = 0;
        startIndexCurr = index + 1;
      }
      else {
        currSum = currSum + elem;
      }
      endIndexCurr = index + 1; //the end index is the index of the final value plus 1, to account for the end when you have to slice the array to that length.
      //if the current sum is greater than the max sum, then update the max sum:
      if (currSum > maxSum) {
        maxSum = currSum;
        startIndexMax = startIndexCurr;
        endIndexMax = endIndexCurr;
      }
      //return
    })
      return arr.slice(startIndexMax, endIndexMax);
  }

//Solution #2 - just finding the subarray
function maxSubArr(arr) {
  var currMaxSum = arr[0];
  var maxSum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    //if the individual arr[i] is greater than the sum of its parts, swap the sum to start at arr[i]
    if (currMaxSum + arr[i]  < arr[i]) {
      currMaxSum = arr[i];
    }
    //otherwise continue to sum the totals
    else {
      currMaxSum += arr[i];
    }
    maxSum = currMaxSum > maxSum ? currMaxSum : maxSum;
  }
  return maxSum;
}
