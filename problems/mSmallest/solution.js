//heap constructor
function MaxHeap() {
  this.heap = [];
}

MaxHeap.prototype.insert = function(val) {
  this.heap.push(val);
  this.heapifyUp();
}

MaxHeap.prototype.heapifyUp = function() {
  //checks that there exists a node, and that the parent node is < the child node
  let currIndex = this.heap.length - 1;
  let currParent = Math.floor((currIndex - 1) / 2);
  while (currIndex > 0 && this.heap[currIndex] > this.heap[currParent]) {
    [this.heap[currIndex], this.heap[currParent]] = [this.heap[currParent], this.heap[currIndex]];
    currIndex = currParent;
    currParent = Math.floor((currIndex - 1) / 2);
  }
}

MaxHeap.prototype.popMax = function() {
  //store the value
  let max = this.heap[0];
  //replace the bottom with the top.
  this.heap[0] = this.heap.pop();
  //heapify down
  this.heapifyDown();
  return max;
}

MaxHeap.prototype.heapifyDown = function() {
  let currIndex = 0;
  let [left, right] = this.getChildren(currIndex);
  let length = this.heap.length;
  while (left < length) {
    let idxLarger;
    if (right < length) {
      idxLarger = this.heap[left] >= this.heap[right] ? left : right;
    }
    else {
      idxLarger = left;
    }
    if (this.heap[currIndex] < this.heap[idxLarger]) {
      [this.heap[currIndex], this.heap[idxLarger]] = [this.heap[idxLarger], this.heap[currIndex]];
      currIndex = idxLarger;
      [left, right] = this.getChildren(currIndex);
    }
    else {return;}
  }
}

MaxHeap.prototype.getChildren = function(index) {
  let childIndex = 2 * index;
  return [childIndex + 1, childIndex + 2];
}


//the actual function
function mSmallest(arr, num) {
  const mArr = new MaxHeap(); //this will be a max heap
  //max heap children...
  //[A, AB, AC, Ba, Bb, Ca, Cb]
  //left child: 2 * n + 1
  //right child: 2 * n + 2

  //add in the first m values into the heap. this is the size of the heap.
  for (var i = 0; i < num; i++) {
    mArr.insert(arr[i]);
  }

  //move through the heap.
  for (var j = num; j < arr.length; j++) {
    if (arr[j] >= mArr[0]) continue;
      mArr.popMax();
      mArr.insert(arr[j]);
  }

  return mArr.heap;
}
