function shiftedArrSearch(shiftArr, num) {
  //find the pivot using a binary search
  function findSmartPivot(arr) {
    let middle = Math.floor(arr.length / 2);
    while (arr[middle - 1] < arr[middle]) {
      if (arr[0] > arr[middle]) {
        middle = Math.floor(middle / 2);
      }
      else if (arr[arr.length - 1] < arr[middle]) {
        middle = Math.floor((arr.length + middle) / 2);
      }
      else {
        return arr.length;
      }
    }
    return middle;
  }

  //find the number using the starting index and the length
  function binarySearch(arr, start, end, num) {
    let middleIdx = Math.floor((start + end) / 2);
    while (arr[middleIdx] !== undefined) {
      if (arr[middleIdx] > num) {
        middleIdx = Math.floor((start + middleIdx) / 2);
      }
      else if (arr[middleIdx] < num) {
        middleIdx = Math.floor((middleIdx + 1 + end) / 2);
      }
      else {
        return middleIdx;
      }
    }
    return -1;
  }

  let pivot = findSmartPivot(shiftArr);
  // //choose the subarray to look through
  if (shiftArr[0] > num) {return binarySearch(shiftArr, pivot, shiftArr.length, num);}
  else {
    return binarySearch(shiftArr, 0, pivot + 1, num);
  }
}
