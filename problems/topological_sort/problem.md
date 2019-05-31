## Topological Sort
A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge `uv` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering. A topological ordering is possible if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG).

### Question
Given an adjacency list, create a function that will perform a topological sort using DFS and return an array of elements in sorted order.


### Example
```js
const graph = {
  0: [],
  1: ['5','6'],
  2: [],
  3: ['5'],
  4: ['6', '7'],
  5: ['7'],
  6: [],
  7: []
}

topSort(graph) // returns ['4','3','2','1','6','5','7','0']
```

### Approach
This approach uses a recursive solution using DFS.

### Solution
See `solution.js`.

### Credit/Inspiration
This was an algorithm used for a data problem at a previous job.
