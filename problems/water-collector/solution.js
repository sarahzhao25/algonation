//naive solution in n * k time, where k is the height of the maximum water level, and n is the length of the array, in O(n) space

function waterArea(heights) {
  const maxLevel = Math.max(...heights);
  let volume = 0;
  for (let i = maxLevel; i > 0; i--) {
    const arrayOfLevels = [];
    for (let j = 0; j < heights.length; j++) {
      if (heights[j] >= i) arrayOfLevels.push(j);
    }
    for (let k = 0; k < arrayOfLevels.length - 1; k++) {
      const addedVolume = arrayOfLevels[k + 1] - 1 - arrayOfLevels[k];
      volume += addedVolume;
    }
  }
  return volume;
}

//O(n) solution
function waterArea2(heights) {
  const surfaceAreas = new Array(heights.length).fill(0);
  let leftMax = 0;
  //get the maximum left heights...
  for (let i = 0; i < heights.length; i++) {
    let possibleLeftMax = heights[i];
    surfaceAreas[i] = Math.max(possibleLeftMax, leftMax);
    leftMax = surfaceAreas[i];
  }

  //now for the right side
  let rightMax = 0, smaller = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, heights[i]);
    smaller = Math.min(rightMax, surfaceAreas[i]);
    surfaceAreas[i] = smaller - heights[i];
  }

  return surfaceAreas.reduce((accum, elem) => accum + elem, 0);
}
