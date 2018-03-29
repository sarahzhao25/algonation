## Linked List Node Removal

### Prompt
Given the head of a singly linked list and an integer `k` that is less than the length of the list, remove the `k`th from the last node.

### Example
```js
const LL = new LinkedList();
LL.add(3);
LL.add(4);
LL.add(5);
LL.add(6);
LL.add(7);

//LL should be 3 -> 4 -> 5 -> 6 -> 7

removeLLNode(LL.head, 1) //LL should show 3 -> 4 -> 5 -> 7
}
```

### Approach
The initial idea is to run through the list once to obtain the length of the list, and then subtract `k + 1` so that the removal will be establishing the `k - 1`th node to have a `next` of the `k + 1`th node. If the linked list were too long such that more than 1 run would be too expensive, the other option is to have 2 pointers. One at the beginning, and one right in front of it. The one in front will continue until it is `k + 1` nodes ahead of the other, and then both will move at the same time until the second pointer is at the last node. Then, the first pointer will change its reference to the next node, and thus remove the node from the linked list.

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is accredited to Daily Coding Problems and Jonathan Schwartz, a teaching fellow at Fullstack Academy.
