function insertionSort(array) {
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    let startIndex = i;
    while (array[startIndex] < array[index] && index >= 0) {
      [array[startIndex], array[index]] = [array[index], array[startIndex]];
      startIndex = index;
      index--;
    }
    index = i;
  }
  return array;
}

function selectionSort(array) {
  let currSortedIndex = 0; //index at the end of the sorted array
  let smallest = 0; //index of the smallest number
  while (currSortedIndex < array.length) {
    //find the smallest number
    for (let i = currSortedIndex; i < array.length; i++) {
      if (array[smallest] > array[i]) smallest = i;
    }
    //swap the numbers
    [array[currSortedIndex], array[smallest]] = [array[smallest], array[currSortedIndex]];
    currSortedIndex++;
    smallest = currSortedIndex;
  }
  return array;
}

insertionSort([4, 3, 2, 1])
selectionSort([4, 3, 2, 1])
