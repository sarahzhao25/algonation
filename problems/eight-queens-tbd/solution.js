//1. Write a function that takes in two node references, each pointing to the head of a difference singly linked list, and determine if the two lists intersect.

function intersectLL(node1, node2) {
  //one approach - make a set, and store the nodes of the first one. if anyone one in the second list matches, there is an intersection.
  let node1Set = new Set();
  let currNode = node1;
  while (node) {
    node1Set.add(node);
    node = node.next;
  }
  let maybeRepeat = node2;
  while (!node1Set.has(maybeRepeat) && maybeRepeat) {
    maybeRepeat = maybeRepeat.next;
  }
  return node1Set.has(maybeRepeat);
}

//2. Solve the same problem above in O(c) space. This means that the inputted linked lists will not be modified, and no additional data strucutres will be used.

function intersectSecond(node1, node2) {
  //if they intersect, then they will eventually reach the same tail


}
