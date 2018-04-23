function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerA = 0, pointerB = 0;
  (arrayOne[pointerA] > arrayTwo[pointerB]) ? pointerB = 1 : pointerA = 1;

  let retA = 0, retB = 0;
  let difference = absDiff(arrayOne[retA], arrayTwo[retB]);

  while (pointerA < arrayOne.length && pointerB < arrayTwo.length) {
    if (absDiff(arrayOne[pointerA], arrayTwo[pointerB]) < difference) {
      difference = absDiff(arrayOne[pointerA], arrayTwo[pointerB]);
      retA = pointerA, retB = pointerB;
    }
    (arrayOne[pointerA] > arrayTwo[pointerB]) ? pointerB++ : pointerA++;
  }
  return [arrayOne[retA], arrayTwo[retB]];
}

function absDiff(num1, num2) {
  return num1 - num2 < 0 ? -1 * (num1 - num2) : num1 - num2;
}
