function findIndex(matrix, target) {
  let rowIndex = 0;
  let colIndex = matrix[0].length - 1;
  while (matrix[rowIndex] && matrix[rowIndex][colIndex]) {
    if (matrix[rowIndex][colIndex] > target) colIndex--;
    else if (matrix[rowIndex][colIndex] < target) rowIndex++;
    else return [rowIndex, colIndex];
  }
  return [-1, -1];
}
