function nQueenProblem(numQueens) {
  const finalMatrix = [];
  for (let i = 0; i < numQueens; i++) {
    finalMatrix[i] = Array(numQueens).fill(0);
  }
  console.log(finalMatrix);
  for (let i = 0; i < finalMatrix.length; i++) {
    if (!hasQueensConflict()) {

    }
  }

  function hasQueensConflict(rowNum, columnNum) {
    // pass in the row and column, and then check the entire column, the entire row, and diagonal

    // total rows
    const rowSum = finalMatrix[rowNum].reduce((accum, value) => accum + value);
    if (rowSum > 1) return true;

    // total columns
    let colSum = 0;
    for (let i = 0; i < numQueens; i++) {
      colSum += numQueens[i][columnNum];
    }
    if (colSum > 1) return true;

    // diagonal

  }

  function getDiagonal(rowNum, columnNum) {
    const first = rowNum > columnNum ?
  }
}

console.log(nQueenProblem(8));
