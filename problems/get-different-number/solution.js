function getDifferentNumber(arr) {
  //are running a for loop through all the elements
  //within the for-loop you want to run a while loop
  //the conditions are that the index is less than
  //the array length so that you don't hunt for an index that does not exist in the array
  //the other condition is when your element in that index is not in the correct place
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] < arr.length && arr[arr[i]] !== arr[i]) {
      swap(arr, i, arr[i]);
    }
  }
  //after you are done swappin' everything around, you find the first element that is out of place? question mark?
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j) return j;
  }
  return arr.length;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
