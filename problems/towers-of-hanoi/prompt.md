## Towers of Hanoi

### Question

You have *three* rods sticking out of the ground. There are n uniquely-sized disks stacked on the rod on the left. The goal is to move all three disks to the last rod on the right.

Rules:
1. You can only move 1 disk at a time.
2. You cannot stack a larger disk on top of a smaller disk.

Write a function, `towersOfHanoi`, that will *print* the instructions to move the n disks from a starting rod 'start' to an ending rod 'end'.

### Example
```js
//takes 3 parameters: number of disks, starting rod, ending rod, buffer rod
towersOfHanoi(3, 'start', 'end', 'middle');
//prints the following:
move disk from start to last
move disk from start to middle
move disk from last to middle
move disk from start to last
move disk from middle to start
move disk from middle to last
move disk from start to last
```

### Approach
At first, the thought process seems random. This is a classic kids' toy/puzzle where you just wanted to move the disks from one side to another. There are, in theory, multiple ways that you can do so, but you don't know just how many steps that will take. What you DO know is the following:
1. If you only have 1 disk, you can move it directly to the end in one step.
2.  If you have two - in order to move your bottom disk to the end rod, you need to perform step 1 to the middle rod with your first disk, and then move your bottom disk to the end, and perform step 1 again to move from your buffer (middle) rod to the end.

This then suggests that when you have 3, you will perform step 2 on the first two disks, and then move your bottom disk to the end, and perform step 2 again to the end rod on top.

This presents a naturally *recursive* solution, where you move all of your smaller disks besides your nth disk to the buffer rod, then you move your nth disk to the end rod, and then move all of the smaller disks to the end rod from the buffer rod.

### Solution
See `solution.js`.

### Credit/Inspiration
This is a popular question in 'Cracking the Coding Interview version 6', and was an extra in a REACTO problem at Fullstack Academy. This is my own explanation.
