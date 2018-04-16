function findGrantsCap(grantsArray, newBudget) {
  // your code goes here
  let potentialCap = 0, sum = 0;
  grantsArray.sort((a, b) => a > b);  //sorts according to number value

  for (var i = 0; i < grantsArray.length; i++) {
    potentialCap = grantsArray[i];
    if (sum + (potentialCap * (grantsArray.length - i)) >= newBudget) {
      return (newBudget - sum) / (grantsArray.length - i);
    }
    sum += grantsArray[i];
  }
}
