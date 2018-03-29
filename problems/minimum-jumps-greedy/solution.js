function minJumps(arr) {
  let jumps = 0;
  let currIndex = 0;
  while (currIndex < arr.length - 1) {
    let furthestIndex = -1;
    for (var i = 0; i <= arr[currIndex] && arr[currIndex + i]; i++) {
      if (arr[currIndex] + currIndex >= arr.length - 1) {
        furthestIndex = arr.length;
        break;
      }
      else if (arr[currIndex + i] + currIndex + i >= (arr[furthestIndex] + furthestIndex || 0)) {
        furthestIndex = currIndex + i;
      }
    }
    currIndex = furthestIndex;
    jumps++;
  }
  return jumps;
}
