function kadanesAlgorithm(array) {
  // Write your code here.
	let currSum = array[0], maxSum = array[0];
	for (let i = 1; i < array.length; i++) {
	  console.log('this is the value: ', array[i], currSum, maxSum)
		if (currSum + array[i] > maxSum) {
			maxSum = currSum + array[i];
			currSum += array[i];
		}
		else if (currSum + array[i] >= array[i]) {
			currSum += array[i];
		}
		else if (array[i] > maxSum) {
		  maxSum = array[i];
		  currSum = array[i];
		}
		else {
			currSum = array[i];
		}
	}
	return maxSum;
}
