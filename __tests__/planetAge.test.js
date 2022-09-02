import PlanetAge from './../src/planetAge.js';

describe('PlanetAge', () => {
  test('should correctly create a planetage object with age', () => {
    const planetAge = new PlanetAge(5);
    expect(planetAge.age).toEqual(5);
  })

  test('should correctly calculate mercury age', () => {
    const mercuryAge = new PlanetAge(5);
    expect(mercuryAge.calculatePlanetAge()).toEqual(1.2);

  })

  test('should correctly calculate venus age', () => {
    const venusAge = new PlanetAge(5);
    expect(venusAge.calculatePlanetAge()).toEqual(3.1);
  })
});