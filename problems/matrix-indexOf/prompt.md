## Matrix `indexOf` Method

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
The worst case scenario with `O(n * m)` run-time, assuming `n` is the number of rows of the matrix, and `m` is the number of elements per row. You would perform a doubly-nested `for`-loop to traverse each element in the matrix, and return the indices if found, and `[-1, -1]` if not.

The second scenario takes advantage of the array being sorted, and each value being unique, in `O(n + m)` run-time. If you were to start at the beginning of the matrix, all values both below and to its right will be larger than the value. But if you were to start at the end of the first array, now you have options. You know that if your number is less, your number will be further to its left in the row. But if your number were greater, your number will not be in that row, but be in a different column entirely. So you have two options: `left` or `down`.

You start with a pointer in the 0th index array in its last index, i.e. `matrix[0, matrix[0].length - 1]`, and apply the logic. If you ever end up in an inaccessible index, then you know that the target does not exist in the matrix.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is accredited to Sam Chai, a teaching fellow at Fullstack Academy.
