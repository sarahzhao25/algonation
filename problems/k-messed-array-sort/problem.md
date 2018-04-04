# K-Messed Array Sort

### See [Repl](https://repl.it/@sarahzhao25/kMessedSortedArray)
### See [Gist](https://gist.github.com/sarahzhao25/646473f6bb9d55961ec84773d6960ea0)
## Prompt
Given an array of integers `arr` where each element is at most `k` places away from its sorted position, write a function `sortKMessedArray` that sorts `arr`.

## Example
For an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

```js
let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
let k = 2;
sortKMessedArray(arr, k) //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Approach
An initial thought process would be to sort the array using mergeSort or Javascript's sort method, in `nlog(n)` time. However, this would ignore that fact that the array is already mostly sorted (k-sorted), resulting in a less optimal solution.

Let's consider what can be done to leverage k. k provides a plus/minus deviation from the actual index, providing `2k + 1` options for every element. However, if we can guarantee that the first index's value is sorted, then this becomes `k + 1` options for the next element. How can we guarantee that?

### 'Sliding Window' Sub-array
The 1st number in the array can be in any position from 0 to k, since there are no negative indices.

Consider a sub-array of that length, `k + 1`, filled with the first `k + 1` values in the array. You can sort the value into the first index correctly, since you know each element is within k indices of its final sorted index. We can then 'slide' the sub-array one index over and repeat to find the smallest element until the entire array has been traversed.

```js
const arr = [2,4,1,3];
const k = 2;

const window = [2,4,1]; //sub-array from index 0 of length K+1
//Sort the first index
window =  [1,2,4]

//Now slide the window down 1 index to the right.
window => [2,4,3]

//repeat until the full array is traversed

```

This problem requires the output to be a sorted array from smallest to largest. In order to assume that this window will always be able to sort the smallest value, *insertion into this array also needs to be 'sorted' from the beginning*.

### Binary Heap
A data structure that takes advantage of this insertion method is the `minimum heap`. Heaps are a data structure that, like regular binary trees, will take in data and insert the node in the tree based on comparisons to the other node's values. In a minimum heap, the node parent is always smaller than its children, resulting in the smallest value being at the top of the heap.

To apply this to the sliding window, we can create a minimum heap of size `k + 1`, and fill it with the first `k + 1` elements of the array. Once the heap is built, take the minimum (i.e. the node at the top of the heap) out and place that back into the original array. Slide your sub-array one index over, add that new value to the heap, and again remove the new minimum to place back into the array. Repeat the process until you have traversed the entire array.

To get the last elements out of the heap, the heap itself needs to be traversed to sort the remaining `k + 1` elements into the result array.

## Solution
See `solution.js`.

## Complexity
The time complexity taken here is `O(nlog(k))` time. Having to run through the array entirely requires `O(n)` time, and within each for-loop, inserting and deleting from a heap both take `O(log(k+1))` time, or `O(log(k))`, resulting in an `O(nlog(k))` time complexity.

The space complexity involved requires another array of length `k + 1`, or `O(k)` space complexity.

## Credit/Inspiration
This question is credited to Pramp, with the heap constructor benefited from the priority queue REACTO problem from Fullstack Academy.

## References
[Priority Queue](https://github.com/FullstackAcademy/technical-interview-prep/blob/master/algorithms/3-data-structures/1-priority-queue.md)

[HeapSort](https://www.geeksforgeeks.org/heap-sort/)
