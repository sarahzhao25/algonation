// matrix board, array of words
function boggleBoard(board, words) {
  const dict = new Trie();
  words.forEach(word => dict.add(word));

  const foundWords = {}; //going to hold the result of the endSymbol of the dict, which is a word, and true; this is similar to a Set, so there won't be 2 keys that are the same

  //going to hold the unvisited neighbors
  let visited = board.map(row => row.map(letter => false));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      //needs to start at the root and then move through the dictionary
      explore(row, col, board, dict.root, visited, foundWords);
    }
  }
  return Object.keys(foundWords);
}

function explore(row, col, board, trie, visited, foundWords) {
  //if you've already been here, you're out
  if (visited[row][col]) return;
  const letter = board[row][col];
  // check if the `letter` key exists in the `trieNode` object - if it's not, you're out
  if (!(letter in trie)) return;

  // otherwise ... You mark the letter as visited. You check if it's a word, aka if there is a * after that letter. if it is, you add it. Then you find its neighbors. Then you check its neighbors.
  visited[row][col] = true;
  trie = trie[letter];
  if ('*' in trie) foundWords[trie['*']] = true;
  const neighbors = getNeighbors(row, col, board);
  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, trie, visited, foundWords);
  }

  // after you've looked through all of its neighbors, you come back and mark this as false because you're now doing an entirely new check.
  visited[row][col] = false;
}

function getNeighbors(i, j, board) {
  const neighbors = [];

  // break case [0, 0].
  if (i > 0 && j > 0) neighbors.push([i - 1, j - 1]);
  // break case [0, board[0].length - 1]
  if (i > 0 && j < board[0].length - 1) neighbors.push([i - 1, j + 1]);
  // break case [board.length - 1, board.length - 1]
  if (i < board.length - 1 && j < board[0].length - 1) neighbors.push([i + 1, j + 1]);
  // break case [board.length - 1, 0]
  if (i < board.length - 1 && j > 0) neighbors.push([i + 1, j - 1]);
  // break case [0, anything]
  if (i > 0) neighbors.push([i - 1, j]);
  // break case [board.length - 1, anything]
  if (i < board.length - 1) neighbors.push([i + 1, j]);
  // break case [anything, 0]
  if (j > 0) neighbors.push([i, j - 1]);
  // break case [anything, board[0].length - 1]
  if (j < board[0].length - 1) neighbors.push([i, j + 1]);
  return neighbors;
}

function Trie() {
  this.root = {};
  this.endSymbol = '*';
}

Trie.prototype.add = function(word) {
  let currLetter = this.root;
  for (const letter of word) {
    currLetter[letter] = currLetter[letter] || {};
    currLetter = currLetter[letter];
  }
  currLetter[this.endSymbol] = word;
}
