function towersOfHanoi(num, startRod, endRod, bufferRod) {
  //edge case: the input num is <= 0
  if (num <= 0) return;
  //base case: if the input num is now 1
  if (num === 1) {
    console.log(`move disk from ${startRod} to ${endRod}`);
    return;
  }

  towersOfHanoi(num - 1, startRod, bufferRod, endRod);
  towersOfHanoi(1, startRod, endRod, bufferRod);
  towersOfHanoi(num - 1, bufferRod, endRod, startRod);
}

towersOfHanoi(3, 'start', 'last', 'middle');
