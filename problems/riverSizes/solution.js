function findRivers(matrix) {
  let rowIndex = 0;
  let columnIndex = 0;
  let size = [];
  while (rowIndex < matrix.length && columnIndex < matrix[rowIndex].length) {
    let subSize = getRivers(matrix, rowIndex, columnIndex);
    if (subSize > 0) size.push(subSize);
    columnIndex = (columnIndex + 1) % matrix[rowIndex].length;
    if (columnIndex === 0) rowIndex++;
  }
  return size;
}

function getRivers(matrix, rowIn, columnIn) {
  var size = 0;
  var rowIndex = rowIn || 0;
  var columnIndex = columnIn || 0;
  //need to loop through the matrix

  if (matrix[rowIndex][columnIndex] === 0) {return size;}
  else {
    size++;
    matrix[rowIndex][columnIndex] = 0;
    if (rowIndex - 1 >= 0) size = size + getRivers(matrix, rowIndex - 1, columnIndex);
    if (rowIndex + 1 < matrix.length) size = size + getRivers(matrix, rowIndex + 1, columnIndex);
    if (columnIndex - 1 >= 0) size = size + getRivers(matrix, rowIndex, columnIndex - 1);
    if (columnIndex + 1 < matrix[rowIndex].length) size = size + getRivers(matrix, rowIndex, columnIndex + 1);
  }
  return size;
}

//const testInput = [[0]];  //=> returns []
//const testInput = [[1]]; //=> returns [1]
//const testInput = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]]; //=> returns [3, 2, 1]
const testInput = [
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 1, 0],
]; //=> returns [2, 1, 3, 1];

findRivers(testInput);
