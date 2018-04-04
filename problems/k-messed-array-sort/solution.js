function sortKMessedArray(arr, k) {
  let heapArr = new MinHeap();

  //iterate through the heapArr of k + 1 indices to guarantee the sorting of the *smallest* number.
  for (let i = 0; i <= k; i++) {
    heapArr.insert(arr[i]);
  }

  //iterate through the rest of the array and mutate the array from the beginning while changing the heap
  for (let i = k + 1; i < arr.length; i++) {
    arr[i - (k + 1)] = heapArr.popMin();
    heapArr.insert(arr[i]);
  }

  //iterate through the heap to sort the k + 1 remaining elements
  for (let i = k; i >= 0; i--) {
    arr[arr.length - 1 - i] = heapArr.popMin();
  }
  return arr;
}

function MinHeap() {
  this._heap = [];
}

MinHeap.prototype.getParent = function(childIdx) {
  return Math.floor((childIdx - 1) / 2);
}

MinHeap.prototype.insert = function(val) {
  this._heap.push(val);
  this.heapifyUp();
}

MinHeap.prototype.heapifyUp = function() {
  let currIdx = this._heap.length - 1;
  while (currIdx > 0 && this._heap[currIdx] < this._heap[this.getParent(currIdx)]) {
    this.swap(currIdx, this.getParent(currIdx));
    currIdx = this.getParent(currIdx);
  }
}

MinHeap.prototype.swap = function(idx1, idx2) {
  [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
}

MinHeap.prototype.popMin = function() {
  let min = this._heap[0];
  let lastValue = this._heap.pop();
  if (this._heap[0]) this._heap[0] = lastValue;
  this.heapifyDown();
  return min;
}

MinHeap.prototype.heapifyDown = function() {
  let currIdx = 0;
  let [left, right] = this.getChildren(currIdx);
  let length = this._heap.length;
  //'left' would always be filled before right, so to guarantee you stay in the while loop
  while (left < length) {
    //if the right is ALSO filled
    let idxSmaller = left;
    if (right < length) {
      idxSmaller = this._heap[left] <= this._heap[right] ? left : right;
    }
    if (this._heap[idxSmaller] < this._heap[currIdx]) {
      this.swap(idxSmaller, currIdx);
      currIdx = idxSmaller;
      left = this.getChildren(currIdx)[0];
      right = this.getChildren(currIdx)[1];
    }
    else {
      return;
    }
  }
}

MinHeap.prototype.getChildren = function(parentIdx) {
  return [2 * parentIdx + 1, 2 * parentIdx + 2];
}
