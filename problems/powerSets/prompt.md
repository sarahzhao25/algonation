## Power Set

### Prompt
Take an array of unique integers (set) and return all unique subsets of the array.

### Example
```js
let set = [1,2,3];
powerSet(set) //returns [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```
### Approach
The initial idea is to obtain all possible combinations and remove duplicates. Another possibility is to use dynamic programming to continuously add to the existing array of arrays. Start off with an array with an empty array inside to start.

### Solution
See `solution.js`.

### Credit/Inspiration

