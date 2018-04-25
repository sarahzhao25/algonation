function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	const maxSumArr = Array(array.length).fill(0);
	for (let i = 0; i < array.length; i++) {
		let maxPotentialSum = array[i];
		for (let j = 0; j < i - 1; j++) {
			if (maxSumArr[j] + array[i] > maxPotentialSum) {
				maxPotentialSum = maxSumArr[j] + array[i];
			}
		}
		maxSumArr[i] = maxPotentialSum;
	}
	return Math.max(...maxSumArr) === -Infinity ? 0 : Math.max(...maxSumArr);
}
