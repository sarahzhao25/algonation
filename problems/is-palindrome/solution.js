function isPalindrome(num) {
  if (num < 0) return false; //no negative numbers
  let maxDivisor = 1;
  //first while loop will determine the maximum power of 10 necessary
  while (num / maxDivisor >= 10) {
    maxDivisor *= 10;
  }
  //second while loop will compare the 1st and last digits and remove them from the number
  while (num > 0) {
    let firstDigit = Math.floor(num / maxDivisor);
    let lastDigit = num % 10;
    if (firstDigit !== lastDigit) return false;
    num = Math.floor((num % maxDivisor) / 10);
    maxDivisor /= 100; //got rid of 2 digits, or two powers of 10
  }
  return true;
}
