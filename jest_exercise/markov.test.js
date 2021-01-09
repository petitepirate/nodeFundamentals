const { MarkovMachine } = require('./markov');

describe('Markov machine tests', () => {

  it('should return the word chains', () => {
    let mm = new MarkovMachine('the cat in the hat');
    expect(mm.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
  });

  it('should return a string of words from makeText', () => {
    let mm = new MarkovMachine('the cat in the hat');
    expect(typeof mm.makeText(10)).toBe('string');
    expect(mm.makeText(10).split(' ').length).toBeLessThan(10);
  });

})
