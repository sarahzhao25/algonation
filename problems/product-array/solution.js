//worst case scenario:
function productWorstCase(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    let product = 1;
    for (var j = 0; j < arr.length; j++) {
      if (j !== i) product *= arr[j];
    }
    newArr.push(product);
  }
  return newArr;
}

//O(n) time and space
function productOn(arr) {
  let arrLeft = [1]; //products to the left of i
  let arrRight = []; //products to the right of i
  let productArr = []; //product of arrLeft and arrRight

  //Both arrLeft and arrRight initialize with a 1 to start, since the first index of arrLeft and the last index of arrRight do not have a left or right respectively, so they must be multiplied by 1.

  //construct the left side array
  for (var i = 1; i < arr.length; i++) {
    arrLeft[i] = arr[i - 1] * arrLeft[i - 1];
  }

  //construct the right side of the array - starts from the right-most side
  for (var j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {arrRight[j] = 1;}
    else {
      arrRight[j] = arr[j + 1] * arrRight[j + 1];
    }
  }

  //construct the product array
  for (var k = 0; k < arr.length; k++) {
    productArr[k] = arrLeft[k] * arrRight[k];
  }
  return productArr;
}

productOn([1, 2, 3, 4, 5]) //returns [120, 60, 40, 30, 24]
