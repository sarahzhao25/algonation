## Product Array

### Prompt
There is a matrix with unique integers that are ordered from left to right, and also from top to bottom. Create a function that will take that matrix and a target value and returns the indices of that value as an array `[rowIndex, columnIndex]` or `[-1, -1]` if it does not exist.

### Example
```
Input:
const matrix =
[[ 1,  2,  3,  4,  5],
 [ 6, 10, 12, 18, 20],
 [11, 13, 15, 21, 23]];

const target = 12;

findIndex(matrix, target);

Output:
[1, 2]
```

### Approach
The worst case scenario with `O(n * m)` run-time, assuming `n` is the number of rows of the matrix, and `m` is the number of elements per row. You would perform a doubly-nested `for`-loop where

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is accredited to Sam Chai, a teaching fellow at Fullstack Academy.
