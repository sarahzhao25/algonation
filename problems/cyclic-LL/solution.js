//Provided for you:
function Node (value) {
  this.value = value;
  this.next = null;
}

function BuildLinkedList (linkedListLength, cycleLength) {
  if (cycleLength >= linkedListLength) {
      throw new Error('cycleLength must be smaller than linkedListLength');
  }
  var newNode;
  var startNode =  new Node(randomNum());
  this.head = startNode;
  var previous = startNode;

  for (var i = 1; i < linkedListLength; i++) {
      newNode = new Node(randomNum());
      previous.next = newNode;
      previous = newNode;
      if (i === linkedListLength - cycleLength) {
          var startingNodeOfCycle = newNode;
      }
  }
  newNode.next = startingNodeOfCycle;
}

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}


//Solution
//finding the cycle involves running 1 pointer 2x as fast as the other, so that they would eventually meet if they're in a cycle.
//if they DO meet, start both of the pointers at the same spot, and add a length variable initialized at 0. Run through until they point to the same spot, and that is the length.
//From the length, start 1 pointer at the beginning, and 1 pointer at the end. They will meet at the start of the cycle because it's the length of the cycle.
function findCycle(head) {
  let slowRunner = head;
  let fastRunner = head.next;
  //returns from the function findCycle if there is 1 node
  if (!fastRunner) return null;
  //find a cycle
  while (fastRunner && slowRunner !== fastRunner) {
    slowRunner = slowRunner.next;
    if (fastRunner.next) fastRunner = fastRunner.next.next;
    //returns from the function findCycle for no cycle
    else return null;
  }
  //if fastRunner hits the end of the cycle (fastRunner === null)
  if (!fastRunner) return null;

  //find the length of the cycle
  fastRunner = slowRunner.next;
  let length = 1;
  while (fastRunner !== slowRunner) {
    length++;
    fastRunner = fastRunner.next;
  }

  //from the length, find the actual node!
  slowRunner = head;
  fastRunner = head;
  for (var i = 0; i < length; i++) {
    fastRunner = fastRunner.next;
  }
  while (slowRunner !== fastRunner) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }
  return [length, slowRunner];
}
