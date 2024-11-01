import { isPrime, factorial } from './mathUtils1.js';

describe('mathUtils > isPrime', () => {
  it("returns true for a prime number", () => {
    expect( isPrime(2) ).toBe(true);
    expect( isPrime(5) ).toBe(true);
    expect( isPrime(53) ).toBe(true)
    //TODO: write assertions that passing 5 and 53 each return true
  });
  
  //TODO: write a test to assert that passing a non-prime returns false. Use 15 and 100000 as test cases.
  it("returns false for non-prime number", () => {
    expect(isPrime(15)).toBe(false);
    expect(isPrime(100000)).toBe(false);
  })

  it("returns false for anything less than two", () => {
    expect( isPrime(0)).toBe(false);
    expect( isPrime(1)).toBe(false);
    expect( isPrime(-5)).toBe(false);
    //TODO: write assertions that passing 1 or -5 each return false
  });
});

describe('mathUtils > factorial', () => {
  it("returns the correct factorial for a positive number", () => {
    //TODO: write assertions for various positive numbers. 
    // Passing 1 should return 1
    expect( factorial(1)).toBe(1);
    // Passing 3 should return 6
    expect( factorial(3)).toBe(6);
    // Passing 6 should return 720
    expect( factorial(6)).toBe(720);
    // Passing 10 should return 3628800
    expect( factorial(10)).toBe(3628800);
  });

  //TODO: write a test to assert that calling factorial on zero will return 1.
  it("returns 1 for the factorial of zero", () => {
    expect(factorial(0)).toBe(1);
  })

  it("returns null for negative numbers", () => {
    expect( factorial(-5) ).toBe(null);
  });

});