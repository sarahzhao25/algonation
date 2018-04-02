function sortKMessedArray(arr, k) {
  let heapArr = new MinHeap();
  for (var i = 0; i <= k; i++) {
    heapArr.insert(arr[i]);
  }

  for (var i = k + 1; i < arr.length; i++) {
    arr[i - (k + 1)] = heapArr.popMin();
    heapArr.insert(arr[i]);
  }

  for (var i = k; i >= 0; i--) {
    arr[arr.length - 1 - k] = heapArr.popMin();
  }
  return arr;
}

function MinHeap() {
  this._minheap = [];
}

MinHeap.prototype.insert = function(val) {
  this._minheap.push(val);
  let parentNode = Math.floor((this._minheap.length - 1) - 1) / 2;
  let currNode = this._minheap.length - 1;
  while (currNode >= 0 && this._minheap[parentNode] > this._minheap[currNode]) {
      [this._minheap[currNode], this._minheap[parentNode]] = [this._minheap[parentNode], this._minheap[currNode]];
      currNode--;
      parentNode = Math.floor(currNode - 1) / 2;
  }
}

MinHeap.prototype.popMin = function() {
  let min = this._minheap[0];
  this._minheap[0] = this._minheap.pop();
  let currNode = this._minheap[0];
  let [left, right] = this.getChildren(currNode);
  while (left < this._minheap.length) {
    let idxSmaller;
    if (right < this._minheap.length) {
      idxSmaller = this._minheap[left] >= this._minheap[right] ? left : right;
    }
    else {
      idxSmaller = left;
    }
    if (this._minheap[currIndex] > this._minheap[idxSmaller]) {
      [this._minheap[currIndex], this._minheap[idxSmaller]] = [this._minheap[idxSmaller], this._minheap[currIndex]];
      currIndex = idxSmaller;
      [left, right] = this.getChildren[currIndex];
    }
    else {return;}
  }
  return min;
}

MinHeap.prototype.getChildren = function(index) {
  let child = 2 * index;
  return [child + 1, child + 2];
}
