function threeNumberSum(array, targetSum) {
  // Write your code here.
  const returnArr = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let smallerSum = targetSum - array[i];
    let lowerBoundi = i + 1, upperBoundi = array.length - 1;
    while (lowerBoundi < upperBoundi) {
      if (array[lowerBoundi] + array[upperBoundi] === smallerSum) {
        returnArr.push([array[i], array[lowerBoundi], array[upperBoundi]]);
        lowerBoundi++;
        upperBoundi--;
      }
      else if (array[lowerBoundi] + array[upperBoundi] >= smallerSum) {
        upperBoundi--;
      }
      else {
        lowerBoundi++;
      }
    }
  }
  return returnArr;
}
