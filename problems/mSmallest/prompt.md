## m Smallest Elements

### Prompt
Given an array of `n` unsorted numbers, return the `m` smallest numbers. Complete this in `O(nlogm)` time and `O(m)` space.

### Example
```js
mSmallest([4,3,3,4,3,3,2,5,4,3,6,-1, -2, 1, -2], 2)//returns [-2, -2]
```
### Approach
The naive approach is to loop through all of the numbers `m` times to obtain the `m` smallest numbers, and splice the numbers that are taken out, or store a separate array of indices that are to be ignored.

Another naive approach would be to sort the array, and return the first `m` elements of that array. This would take `O(n log n)` time to sort the elements, and `O(m)` space complexity, unless we cannot sort the array in place.

A different approach would be to use a binary max heap for the returning array of length `m`. As we loop through the original array of length `n`, we are inserting into and popping the maximum off of the max heap, which takes `O(log m)` time each way.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is credited to Wilbur Zhao, junior/senior at MIT.
