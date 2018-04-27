function getIndicesOfItemWeightsOPTIMIZED(arr, limit) {
  // your code goes here
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = limit - arr[i];
    if (obj[complement] === undefined) obj[arr[i]] = i;
    else return (obj[complement] > i) ? [obj[complement], i] : [i, obj[complement]];
  }
  return [];
}

function getIndicesOfItemWeightsNAIVE(arr, limit) {
  // your code goes here
  let resultArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let potSum = arr[i] + arr[j];
      if (potSum === limit) resultArr = (i > j) ? [i, j] : [j, i];
    }
  }
  return resultArr;
}
