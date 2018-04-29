function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
	const waysArr = Array(n + 1).fill(0);
	//initialize waysArr[0] to be 1 for the base case because there is only 1 way to make 0 change.
	waysArr[0] = 1;
	//run through the denoms array
	for (let i = 0; i < denoms.length; i++) {
		let denom = denoms[i];
		//run through the waysArr array in order to add up the ways!
		//can start at 1 because 0 is confirmed.
		for (let j = 1; j < waysArr.length; j++) {
			if (denom <= j) {
				waysArr[j] += waysArr[j - denom];
			}
		}
	}
	return waysArr[n];
}
