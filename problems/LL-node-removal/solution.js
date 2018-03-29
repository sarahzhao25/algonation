function removeLLNode(head, k) {
  let currNode = head;
  let furtherNode = head.next;
  let counter = 0;
  while (counter < k) {
    furtherNode = furtherNode.next;
    counter++;
  }
  while (furtherNode) {
    currNode = currNode.next;
    furtherNode = furtherNode.next;
  }
  currNode.next = currNode.next.next;
}
