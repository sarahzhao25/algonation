## Spiral (arrays)

### Question
You have a multidimensional array with equal-length sub-arrays (input). Make a function that returns a flattened array with the integers spiraled from the top left in a clockwise order.


### Example
```
var array =
[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]];

console.log(spiral(array));
//output should be [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
```

### Approach
The idea of the problem is as follows:
1. The first row will be added consecutively.
2. The rows in between the first and last will have their LAST values added.
3. The final row will be added in reverse order.
4. The rows in between the first and last will have their FIRST values added.
5. This repeats until the array ends.

### Solution
See `solution.js`.

### Credit/Inspiration
This was an extra in a REACTO problem at Fullstack Academy. This is my understanding of the solution.
