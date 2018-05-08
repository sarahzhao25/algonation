class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      let startIndex = i, obj = this.root;
      while (startIndex < string.length - 1) {
        obj[string[startIndex]] = obj[string[startIndex]] || {};
        obj = obj[string[startIndex]];
        startIndex++;
      }
      obj[string[startIndex]] = {[this.endSymbol]: true};
      //console.log(this.root)
    }
  }

  contains(string) {
    let currTrie = this.root, index = 0;
    while (index < string.length && currTrie[string[index]]) {
      console.log(currTrie[string[index]])
      currTrie = currTrie[string[index]];
      index++;
    }
    return index === string.length && currTrie.hasOwnProperty(this.endSymbol)
  }
}
