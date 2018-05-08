function subarraySort(array) {
  //find the largest and the smallest out of order integers
  //then loop through again and find their actual positions
  let smallest, largest;
  let positionS = 0, positionL = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      if (!smallest || array[smallest] > array[i + 1]) smallest = i + 1;
      if (!largest || array[largest] < array[i]) largest = i;
    }
  }
  console.log(array[smallest])
  while (positionS < array.length - 1 && array[positionS] <= array[smallest]) {
      positionS++;
    }

  while (positionL >= 0 && array[positionL] >= array[largest]) {
    positionL--;
  }
  return smallest ? [positionS, positionL] : [-1, -1];
}
