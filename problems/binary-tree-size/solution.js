//You take into account each subtree

function binarySize(arr) {
  function findSize(index) {
    let currIndex = 0;
    let queue = [index];
    let currSum = 0;
    while (queue[currIndex] < arr.length) {
      currSum += arr[queue[currIndex]];
      queue.push(2 * currIndex + 1, 2 *  currIndex + 2);
      currIndex++;
    }
    return currSum;
  }
  let leftSum = findSize(1), rightSum = findSize(2);
  if (leftSum > rightSum) return 'Left';
  else if (rightSum > leftSum) return 'Right';
  else return '';
}
