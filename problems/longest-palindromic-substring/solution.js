function longestPalindromicSubstring(string) {
  let longestP = string[0];
  //run through the for loop and assume that each letter is the middle of the palindrome
  for (let i = 1; i < string.length; i++) {

    //check the palindrome if i is in the middle
    let bounds = 1;
    while (i - bounds >= 0 && i + bounds < string.length && string[i - bounds] === string[i + bounds]) {
      if (2 * bounds + 1 > longestP.length) {
        longestP = string.slice(i - bounds, i + bounds + 1);
      }
      bounds++;
    }

    //check palindrome if i is the first half
    let otherBounds = 0;
    while (i - otherBounds >= 0 && i + otherBounds < string.length && string[i - otherBounds] === string[i + otherBounds + 1]) {
      if (2 * (otherBounds + 1) > longestP.length) {
        longestP = string.slice(i - otherBounds, i + 1 + otherBounds + 1)
      }
      otherBounds++;
    }
  }
  return longestP;
}
