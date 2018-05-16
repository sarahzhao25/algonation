class: center middle

Immutable Binary Search Tree
Interviewer Prompt
Implement an immutable binary search tree class. The class constructor should accept (at least) a single argument which will represent the value for its root node. Each instance should have two methods: insert, which takes a numerical value and returns a new binary search tree containing that value, and contains, which takes a numerical value and returns true or false based on whether the tree contains it.

NOTE: insert should NOT mutate the existing binary search tree! i.e.... :

const bstA = new ImmutableBST(5);
const bstB = bstA.insert(6);
console.log(bstA); // contains only 5, NOT 6
console.log(bstB); // contains 5 and 6
Examples
const bst = new ImmutableBST(5);
const bstMore = bst.insert(4).insert(3).insert(1).insert(10).insert(11).insert(15).insert(2).insert(100);
bstMore.contains(5); // true
bstMore.contains(3); // true
bstMore.contains(11); // true
bstMore.contains(12); // false
console.log(bst === bstMore); // false, because of immutability

Extra Credit
Follow-up: build a remove method, which takes a value and returns a new binary search tree that does not include that value. Please feel free to create extra methods and properties to assist, i.e. size, min, and max.

Read more here: https://en.wikipedia.org/wiki/Persistent_data_structure#Trees and/or here: https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2#.7xy1ccvr0.

