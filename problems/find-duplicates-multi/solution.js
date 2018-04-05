function findDuplicates(arr1, arr2) {
  //two pointers, one for arr1, one for arr2
  //i have this while loop where both pointers are < their respective lengths
  //if one is less than the other, increment the smaller one
  //if they are the same, then add it to the array, and increment both
  let arr1Pointer = 0, arr2Pointer = 0, dupArr = [];
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      arr1Pointer++;
    }
    else if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      arr2Pointer++;
    }
    else {
      dupArr.push(arr1[arr1Pointer]);
      arr1Pointer++;
      arr2Pointer++;
    }
  }
  return dupArr;
}

function binaryDups(arr1, arr2) {
  //loop through the first array
  //binary search through the second array, which is much larger

  let dupArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (binarySearch(arr1[i], arr2)) dupArr.push(arr1[i]);
  }

  function binarySearch(val, arr, left = 0, right = arr.length) {
    let middleIdx = Math.floor((right - left) / 2) + left;
    if (left >= right) return false;
    if (arr[middleIdx] === val) {return true;}
    else if (arr[middleIdx] < val) {
      left = middleIdx + 1;
    }
    else {
      right = middleIdx - 1;
    }
    return binarySearch(val, arr, left, right);
  }

  return dupArr;
}
