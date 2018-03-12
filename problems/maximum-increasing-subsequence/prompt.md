# Maximum Increasing Subsequence

### Prompt
Given an an array of numbers, find the length of the *longest possible subsequence* that is increasing. This subsequence can "jump" over numbers in the array, i.e. they do not need to be contiguous. For example in `[3, 10, 4, 5]` the longest increasing subsequence (LIS) is `[3, 4, 5]`.

### Examples
```js
longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]);
// should return 3, the length of the longest increasing subsequence:
// 3, 4, 6 (or 3, 4, 10)
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]);
// should return 6, the length of the maximum increasing subsequence:
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]);
// should return 9, the length of the maximum increasing subsequence:
// 10, 20, 21, 23, 24, 25, 26, 27, 28
```

### Approach
The idea is to use dynammic programming to store the ever-increasing lengths of sub-arrays.

TBD

### Solution
See `solution.js`.

### Credit/Inspiration
This was an extra in a REACTO problem at Fullstack Academy. This is my understanding of the solution.
