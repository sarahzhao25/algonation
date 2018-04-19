function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) return [];
  arr.sort((a, b) => a > b);
  for (let i = 0; i < arr.length - 4; i++) {
    for (let j = i + 1; j < arr.length - 3; j++) {
      let lowPt = j + 1, highPt = arr.length - 1, subSum = s - (arr[i] + arr[j]);
      while (lowPt < highPt) {
        let potentialSum = arr[lowPt] + arr[highPt];
        if (potentialSum === subSum) {
          return [arr[i], arr[j], arr[lowPt], arr[highPt]];
        }
        else if (potentialSum > subSum) {
          highPt--;
        }
        else {
          lowPt++;
        }
      }
    }
  }
  return [];
}
