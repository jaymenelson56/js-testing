import { checkGuess } from "./greenGlassDoor2.js";

//TODO: create a group of tests.
describe("greenGlassDoor2 > guess", () => {
  //TODO: before the tests run, set up a spy for console.log
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("checks that checkGuess logs a message for the correct guess", () => {
    expect(checkGuess('door')).toBe(true);
    expect(checkGuess('cool')).toBe(true);
    expect(checkGuess('moon')).toBe(true);

    expect(console.log).toHaveBeenCalledTimes(3)

    expect(console.log).toHaveBeenCalledWith('You have made 3 guesses');
  });

  it("checks that checkGuess logs a message for the incorrect guess", () => {
    expect(checkGuess('star')).toBe(false);
    expect(checkGuess('light')).toBe(false);
    expect(checkGuess('bright')).toBe(false);

    expect(console.log).toHaveBeenCalledTimes(3)

    expect(console.log).toHaveBeenCalledWith('You have made 6 guesses');
  })

  
});
//TODO: after each test, reset jest's counters

//TODO: write a test that checkGuess logs a message for correct guesses.
//TODO: Call it three times, then check that console.log was called three times, and that it logged that you made three guesses.

//TODO: write a test that checkGuess logs a message for incorrect guesses.
//TODO: Call it three times, then check that console.log was called three times, and that it logged that you made six guesses (because we don't reset the data in greenGlassDoor).

//TODO: end the group of tests
