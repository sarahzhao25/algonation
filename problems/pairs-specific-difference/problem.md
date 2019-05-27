## Pairs with Specific Difference

### Prompt
Given an array `arr` of distinct integers and a nonnegative integer `k`, write a function `findPairsWithGivenDifference` that returns an array of all pairs `[x,y]` in `arr`, such that `x - y = k`. If no such pairs exist, return an empty array.

### Example
```js
findPairsWithGivenDifference([0, -1, -2, 2, 1], 1)//returns [[1, 0], [0, -1], [-1, -2], [2, 1]]
findPairsWithGivenDifference([1, 7, 5, 3, 32, 17, 12], 17) // returns []
```
### Approach
There are two approaches to this problem: the first one is an `n^2` time complexity, with `O(1)` space complexity not including the resulting array. Run through the loop twice to check and see if the numbers subtract to equal k.

The second approach includes a hashmap, very similar to an x-y graph. Since `x - y = k`, we can take advantage of the fact that `k - x = y`. Therefore, we can include a hash of `hash[y] = x` or `hash[k - x] = x`. Then, when we check the array again, we can just see if the value at that element exists, since that is an `O(1)` lookup, and there is a unique value y for every x.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is credited to Pramp.
