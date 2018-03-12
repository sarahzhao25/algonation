## Find Linked List Intersection

### Problem
1. Write a function that takes in two node references, each pointing to the head of a difference singly linked list, and determine if the two lists intersect.

2. Solve the same problem above in O(c) space. This means that the inputted linked lists will not be modified, and no additional data strucutres will be used.

3. Write a function that takes in two singly linked lists, and if they intersect, returns the node of intersection. If they do not intersect, this function should return null.

### Approach
The first problem will run through the first singly linked list, and place all of the nodes in a Set. The second list will then be run through, and if there are that are duplicates - return true. Else, return false.

The follow-up problem in O(c) space follows the idea that if there were an intersection, both tails of the linked lists would be the same (since objects are pass by reference).
