function largestRange(array) {
  array.sort((a, b) => a - b);
  const rangeObj = {};
  for (let i = 0; i < array.length; i++) {
    let isUsed = false;
    for (let key in rangeObj) {
      if (+key + rangeObj[key] + 1 === array[i]) {
        rangeObj[key]++;
        isUsed = true;
      }
    }
    if (!isUsed) rangeObj[array[i]] = 0;
  }
  let maxKey;
  for (let key in rangeObj) {
    if (!maxKey || rangeObj[maxKey] < rangeObj[key]) maxKey = key;
  }
  return [+maxKey, rangeObj[maxKey]]
}

//nlogn time to sort the array, and O(n^2) time worst case

function largestRange(array) {
  const hashT = {};
  let largestRange = [0, 0];
  //run through the array and map the values as hashT keys & true as values
  for (let i = 0; i < array.length; i++) {
    hashT[array[i]] = true;
  }

  //run through the array one more time
  for (let i = 0; i < array.length; i++) {
    //hunt for the left and right sides of the value
    let currVal = array[i];
    let left = currVal, right = currVal + 1;
    while (hashT[left]) {
      hashT[left] = false;
      left--;
    }
    while (hashT[right]) {
      hashT[right] = false;
      right++;
    }
    if (largestRange[1] - largestRange[0] <= (right - 1) - (left + 1)) largestRange = [+left + 1, +right - 1];
  }
  return largestRange;
}

//O(n) time to run through the array
