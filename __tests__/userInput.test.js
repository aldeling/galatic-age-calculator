import UserInput from './../src/userInput.js';

describe('UserInput', () => {
  test('should correctly create a userinput object with age', () => {
    const userInput = new UserInput(5);
    expect(userInput.age).toEqual(5);
  })

  test('should correctly calculate mercury age', () =>{
    const mercuryAge = new UserInput(5);
    expect(mercuryAge.planetAge()).toEqual(1.2);

  })
});