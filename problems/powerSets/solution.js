function findPowerSet(arr) {
  let powerSets = [[]];
  for (var i = 0; i < arr.length; i++) {
    let tempArr = [];
    for (var j = 0; j < powerSets.length; j++) {
      tempArr.push(powerSets[j].concat(arr[i]));
    }
    powerSets = powerSets.concat(tempArr);
  }
  return powerSets;
}

//[[]] => [[], [1]] => [[], [1], [2], [1,2]]
