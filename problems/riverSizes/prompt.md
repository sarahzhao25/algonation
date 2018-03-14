## River Sizes

### Prompt
You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.

### Example
```
Input:
[
[1, 0, 0, 0, 0],
[1, 0, 1, 1, 0],
[1, 0, 1, 1, 0],
[1, 0, 0, 0, 1],
[1, 0, 1, 1, 0],
];

Output:
[1, 2, 4, 5]; //not in any particular order
```
### Approach
My initial approach involved a lot of storage. I had planned on setting up a hashmap while iterating through the matrix, where the key is a hashed version of the two indices in the matrix, and its values would be an array of the neighbors that are rivers. Then, a breadth-first search would be performed in the resulting hashmap and adding neighbors to queues until all neighbors have been found to determine a size of 1 river. This would continue until the hashmap was done.

The second approach involved a recursive depth-first search through each river. You would hit a value that had a 1, indicating a river, and then search through each of its neighbors until you hit the end of the river on all sides. You can choose to set a separate object to hold your searched-through values to avoid duplicates, or you can mutate the original array as well.

### Solution
See `solution.js`.

### Credit/Inspiration
This is accredited to Sam Chai, a fellow at Fullstack Academy for the problem.
