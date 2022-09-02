import UserInput from './../src/userInput.js';

describe('UserInput', () => {
  test('should correctly create a userinput object with age', () => {
    const userInput = new UserInput(5);
    expect(userInput.age).toEqual(5);
  })
});