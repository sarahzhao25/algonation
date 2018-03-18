## Product Array

### Prompt
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. Solve it without using division and in O(n) time.

### Example
```
Input:
[1, 2, 3, 4, 5]

Output:
[120, 60, 40, 30, 24]
```
### Approach
The initial approach is O(n^2) time, where we have a nested array to obtain the products at each index of the array since we can't use division.

The main approach involves O(n) time complexity, and O(n) space complexity. The thought process is as follows:

As you run through the array, you can obtain an ever-increasing product in each index of a new array. In order to avoid the value of the index you are on, you can construct 2 arrays, one for the products left of i, and one for the products right of i. Your final return product array will be the product of both.

Note that since your products on the left side will increment as the indices increment (there is 0 indices left of 0, 1 index left of 1, etc), your products in each index of the array will be based off the product of the previous array.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is accredited to Daily Coding Problems, and the method comes from www.geeksforgeeks.com.
