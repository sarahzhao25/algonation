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
