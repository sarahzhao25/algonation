function reverseWords(arr) {
  mirror(arr, 0, arr.length);
  let startIdx = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      //length of the array to that position i
      //starting index of the first element
      //length is i - startIdx
      mirror(arr, startIdx, i);
      startIdx = i + 1;
    }
  }
  return arr;
}

function mirror(arr, startIdx, fullLength) {
  let length = fullLength - startIdx; //all the spots you will change
  for (let i = 0; i < Math.floor(length / 2); i++) {
    [arr[startIdx + i], arr[(fullLength - 1) - i]] = [arr[(fullLength - 1) - i], arr[startIdx + i]];
  }
}
