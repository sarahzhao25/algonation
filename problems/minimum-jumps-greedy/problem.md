## Minimum Jumps (Greedy)

### Prompt
Given an array with integers representing the number of steps from its index that it can take (1 jump), return the minimum number of jumps to go from the start of the array to the end.

### Example
```js
let a = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]; //7
let b = [2, 8, 2, 3, 4, 2, 2, 7, 5, 1, 1, 1, 2, 1, 1, 1];  //4
let c = [3, 12, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]; //5
let d = [2, 1, 2, 3, 1]; //2
let e = [3,1];  //1
let f = [1]; //0

console.log(minJumps(a));
console.log(minJumps(b));
console.log(minJumps(c));
console.log(minJumps(d));
console.log(minJumps(e));
console.log(minJumps(f));
```
### Approach
A possible approach is to store the information as a graph, and perform a breadth-first search to find the smallest path from star to end. Another possible solution would be to use dynamic programming to increase by one whenever the distance is too far from the current index plus its value.

A solution that we came up with involved taking the furthest number of steps at a time (greedy). This walks through two pointers, one as the current index, and another as a scout to find the next possible index that takes the current index the furthest down the line.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is credited to Jonathan Schwartz, a teaching fellow at Fullstack Academy and AlgoExpert.
