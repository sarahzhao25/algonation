## Time Intervals (Array)

### Question
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

//For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

### Example
```js
let intervals = [[30, 75], [0, 50], [60, 150]]
minIntervals(intervals) //returns 2
```

### Approach
The initial approach would be a nested search through every element, with `O(n^2)` time complexity. Another approach involves dealing with the overlaps, and sorting the array first. If you sorted by `start time`, you can store an array of rooms starting with an empty array.

### Solution
See `solution.js`.

### Credit/Inspiration
This question is accredited to Daily Coding Problems.
