function spiral(arr) {
  let returnArr = [];
  while (arr.length) {
    //take the first row
    returnArr = returnArr.concat(arr.shift());
    //take the ends of the rows (since we are mutating arr, we don't have to worry about the arr.length)
    for (var i = 0; i < arr.length; i++) {
      returnArr = returnArr.concat(arr[i].pop());
    }
    //now we want to reverse the last array
    returnArr = returnArr.concat((arr[arr.length - 1] || []).reverse());
    arr.pop();
    //now we want to take the ends in reverse going back up
    for (var i = arr.length - 1; i >= 0; i--) {
      returnArr = returnArr.concat(arr[i].shift());
    }
  }
  return returnArr;
}
