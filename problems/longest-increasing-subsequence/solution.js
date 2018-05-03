//n logn time to return the length
//you want to have an array that is ever-growing, whose index represents the length of the maximum length of the subsequence whose value is the index of the largest number in the sequence where that length terminates.
//you can conduct a binary search on the length of the array (since indices are sorted) in order to get the index of the sequence and then the number and compare it to the sequence at i.

//how do you know 3?
const arr1 = [3, 4, 2, 1, 10, 6];
const arr = [3, 8, 4, 6, 1, 3, 12, 7, 10];
function longestIncreasingSubsequence(arr) {
  const sub = [null, 0], predecessors = [null], returnSub = [];

  //running through the sequence array
  for (let i = 1; i < arr.length; i++) {

    //Start of binary search
    //check the range of lengths from 1 to max length
    let lowerBound = 1, upperBound = sub.length - 1;
    let middle = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
    //while the terminating value of the array is < the actual array value, and the bounds are proper
    while (arr[sub[middle]] !== arr[i]) {
      console.log(sub, middle, lowerBound, upperBound)
      if (arr[sub[middle]] < arr[i]) {
        lowerBound = middle + 1;
      }
      else {
        upperBound = middle - 1;
      }
      middle = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
      if (upperBound < lowerBound) break;
    }
    //add the proper index
    if (lowerBound > middle) {
      sub[lowerBound] = i;
    }
    else {sub[middle] = i;}
    predecessors.push(sub[middle]);
  }
  //build the predecessors array (the sub array index is the length)
  let startingIndex = sub[sub.length - 1], i = sub.length - 2;
  while (startingIndex !== null && i >= 0) {
    returnSub[i] = arr[startingIndex];
    i--;
    startingIndex = predecessors[startingIndex];
  }
  console.log(predecessors, sub)
  console.log(sub.length - 1)
  return returnSub;
}
