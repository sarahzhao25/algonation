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
