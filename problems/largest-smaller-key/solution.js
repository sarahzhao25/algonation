BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  // your code goes here
  //find the right most leaf node of the first parent node whose value is < my target num
  let potentialLSNode = this.root;
  let theSmallestKey = -1;

  while (potentialLSNode) {
    if (potentialLSNode.key >= num) {
      potentialLSNode = potentialLSNode.left;
    }
    else {
      theSmallestKey = potentialLSNode.key;
      potentialLSNode = potentialLSNode.right;
    }
  }
  return theSmallestKey;
}
