// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  if (inputNode.right) {
    let successor = inputNode.right;
    while (successor.left) {
      successor = successor.left;
    }
    return successor;
  }
  else if (inputNode.parent) {
    if (inputNode === inputNode.parent.left) {
      return inputNode.parent;
    }
    else {
      return this.root;
    }
  }
  else {return null;}
}
