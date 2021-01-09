/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
      this.chains = {};
      this.words.forEach((word, i) => {
        let nextWord = this.words[i + 1] || null;
        if (!this.chains[word]) {
          this.chains[word] = [nextWord]
        } else this.chains[word] = [...this.chains[word], nextWord];
      })
      return this.chains;
    }
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
      const text = [];
      const wordChoices = Object.keys(this.chains);
  
      let randStartIndex = Math.floor(Math.random() * wordChoices.length);
      let currWord = wordChoices[randStartIndex];
      text.push(currWord);
  
      while(text.length < numWords) {
        let nextRandIndex = Math.floor(Math.random() * this.chains[currWord].length);
        let nextWord = this.chains[currWord][nextRandIndex];
        if (nextWord){
          text.push(nextWord);
          currWord = nextWord;
        } else break;
      }
      return text.join(' ');
    }
  }
  
  module.exports = { MarkovMachine };
