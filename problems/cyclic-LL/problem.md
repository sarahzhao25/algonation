## Cyclic Linked List

### Problem
Given a linked list, determine whether or not there is a cycle within the linked list (a cycle is when a node points to an earlier node in the Linked List, creating a loop). If there is a cycle, also find out the length of the cycle and the node at which the cycle starts.

Caveat: you may not use any additional data structures, nor may you modify the existing data structure.

The Linked List node is provided for you.

### Example
Node 1 --> Node 2 --> Node 3 -
            ^                 |
          Node 5  <--  Node 4 <

### Approach
The idea is to use a runner, one node that will move faster than the other.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is from a list of extra algorithm problems from Fullstack Academy.
