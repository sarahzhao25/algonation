function ImmutableBST(val, left, right) {
  this.value = val;
  this.left = left || null;
  this.right = right || null;
  this.size = 1 + (left && left.size || 0) + (right && right.size || 0);
}

ImmutableBST.prototype.insert = function(val) {
  let newRight, newLeft;
  if (val <= this.value) {
    newRight = this.right;
    newLeft = this.left ? this.left.insert(val) : new ImmutableBST(val);
  }
  else {
    newLeft = this.left;
    newRight = this.right ? this.right.insert(val) : new ImmutableBST(val);
  }
  return new ImmutableBST(this.value, newLeft, newRight);
};

ImmutableBST.prototype.contains = function(val) {
  if (val < this.value) {
    if (this.left) return this.left.contains(val);
    else return false;
  }
  else if (val > this.value) {
    if (this.right) return this.right.contains(val);
    else return false;
  }
  else {return true;}
};

ImmutableBST.prototype.min = function() {
  if (this.left) return this.left.min();
  else return this.value;
}

ImmutableBST.prototype.max = function() {
  if (this.right) return this.right.max();
  else return this.value;
}

ImmutableBST.prototype.remove = function(val) {
  let newValue, newLeft, newRight;
  if (this.value === val) {
    //remove can occur in 3 different cases
    //2 children
    if (this.right && this.left) {
      if (this.left.size > this.right.size) {
        newValue = this.left.max();
        newRight = this.right;
        newLeft = this.left.remove(newValue);
      }
      else {
        newValue = this.right.min();
        newLeft = this.left;
        newRight = this.right.remove(newValue);
      }
      return new ImmutableBST(newValue, newLeft, newRight);
    }
    //0 children
    else if (!this.left && !this.right) {
      return null;
    }
    else {
      return this.left || this.right;
    }
  }
  else {
    let newLeft, newRight;
    if (val < this.value) {
      newRight = this.right;
      newLeft = this.left ? this.left.remove(val) : null;
    }
    else {
      newLeft = this.left;
      newRight = this.right ? this.right.remove(val) : null;
    }
    return new ImmutableBST(this.value, newLeft, newRight);
  }
};


const bst = new ImmutableBST(5);
const bstMore = bst.insert(4).insert(3).insert(1)
.insert(10)
.insert(11)
.insert(15)
.insert(2)
.insert(100);
console.log(bstMore.contains(5)); // true
console.log(bstMore.contains(3)); // true
console.log(bstMore.contains(11)); // true
console.log(bstMore.contains(12)); // false
console.log(bst === bstMore); // false, because of immutability
const bstRemove = bstMore.remove(2);
console.log(bstRemove.contains(2)); // false
console.log(bstMore.contains(2)); // true
console.log(bstMore.size) // 9
console.log(bstRemove.size) // 8
