## Is This Number A Palindrome?

### Problem
1. Write a function that takes an integer and returns `true` if it is a palindrome, and `false` if not. No string conversions are allowed.

### Approach
The initial approach would be to convert into a string and manipulate from there. Another approach without string conversion would be to create a mirror image of the number using modular math. The palindrome would be equal to that mirror image.

Unfortunately, once the size of the number grew too large, Javascript does not deal with overflowing numbers. A more generic solution involves two pointers - one at the start, and one at the end. This will create 2 `while` loops as necessary, one to obtain the maximum power of 10 needed to obtain the first digit of the number, and the other to check that digit, and the last digit. If they are equal, remove both from the number and continue until they are either unequal (`false`) or have hit the middle of the number (`true`).

### Solution
See `solution.js`.

### Credit/Inspiration
This problem is accredited to Sandy Mak, a graduate from Fullstack Academy.
