import { checkGuess } from './greenGlassDoor1.js';

//TODO: Start a group of tests about the checkGuess function
  describe('greenGlassDoor > checkGuess', () => {
    it("returns true when passing a double word", () =>{
    expect(checkGuess("green")).toBe(true);
    expect(checkGuess("glass")).toBe(true);
    expect(checkGuess("door")).toBe(true);
  });
  it("returns false when passing a non-double word", () => {
    expect(checkGuess("cat")).toBe(false);
    expect(checkGuess("dog")).toBe(false);
  });
});

  //TODO: write a test that asserts checkGuess returns true when passed a double word

  //TODO: write a test that asserts checkGuess returns false when passed a non-double word
  
//TODO: end that group of tests
