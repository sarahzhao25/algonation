function indexEqualsValueSearch(arr) {
  let upperBound = arr.length - 1;
  let lowerBound = 0;
  let middleIdx = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
  while (arr[middleIdx] !== undefined && arr[middleIdx] !== middleIdx && lowerBound < upperBound) {
    if (arr[middleIdx] > middleIdx) {
      upperBound = middleIdx - 1;
    }
    else {
      lowerBound = middleIdx + 1;
    }
    middleIdx = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
  }
  return arr[middleIdx] === middleIdx ? middleIdx : -1;
}
