## Difference in height of longest and shortest node

### Prompt
Find the difference in height between the deepest and shallowest leaf nodes in a binary tree.

### Example
       40
    20    60
  80  120
20  40
      50


      15
    10  20
  30 35   60
40          70
50
```js

```
### Approach
1. You need to find the height of a binary tree. This is the deepest level. So you calculate the left and right heights, and then return 1 + the maximum of the two. Recursive.
2. The shallowest? Can you do the same for the shallowest?

### Solution
See `solution.js`.

### Credit/Inspiration
