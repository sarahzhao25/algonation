function findPairsWithGivenDifference1(arr, k) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] - arr[i] === k) pairs.push([arr[j], arr[i]]);
    }
  }
  return pairs;
}

const arr = [0, -1, -2, 2, 1], k = 1;

findPairsWithGivenDifference(arr, k);
// brute force method: n^2 solution where you do a double for-loop

// x - y = k  => x - k = y

function findPairsWithGivenDifference(arr, k) {
  const arrHash = {}, pairs = [];
  arr.forEach(e => {
    arrHash[e - k] = e;
  })
  console.log(arrHash);
  arr.forEach(e => {
    if (arrHash[e] !== undefined) pairs.push([k + e, e]);
  })
  return pairs;
}
