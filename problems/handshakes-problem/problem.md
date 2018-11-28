## Handshakes Problem

### Problem
You are hosting a party, and the only rule of the party is that when a guest arrives, that guest must shake hands with everyone currently at the party. Given an array of arrays with start time and end time per guest, how would you count the total number of handshakes?

### Example
``` js
const party = [[5,6], [2,8], [1,2], [30, 40], [1,2]];
numHandshakes(party) // returns 4:
/*
Guest 0 overlaps with guest 1 => 1 handshake
Guest 1 overlaps with guest 2 and guest 4 => 2 handshakes
Guest 2 overlaps with guest 4 => 1 handshake
*/
```

### Approach
So the super fun thing about this problem is that it is optimizable. Our first approach is the using permutations => how do we obtain all of the possible handshakes? We would conduct a double `for` loop in order to figure out all the possible handshakes, similarly to how we checked for handshakes using our eyes.

But now consider what will happen if we flipped the question on its head: the extra time complexity we have here turning it n^2 is because we are hunting through every possibility and connecting the guests directly to their start and end times. But what's important to us? Imagine that you are a counter, you are numHandshakes at the door: what matters to you? Does the individual matter, or do only the numbers matter?

What I'm getting at is the idea that we can completely strip every person's start time and end time. We don't care when 1 person's end time is different from someone else's, but they arrived earlier. You know that a person's end time MUST be after their start time, so it's safe to say that even if you ordered both sets, you will net 0 at the end, and never go negative.

So, with that, let's add a few counters and change things up.

### Solution
See `solution.js`.

### Credit/Inspiration
This is accredited to my company.
