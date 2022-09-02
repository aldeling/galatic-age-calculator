import PlanetAge from './../src/planetAge.js';

describe('PlanetAge', () => {

  test('should correctly create a planetage object with age', () => {
    const planetAge = new PlanetAge(5);
    expect(planetAge.age).toEqual(5);
  })

  test('should correctly calculate mercury age', () => {
    const mercuryAge = new PlanetAge(5);
    expect(mercuryAge.calculateMercuryAge()).toEqual(1.2);
  })

  test('should correctly calculate venus age', () => {
    const venusAge = new PlanetAge(5);
    expect(venusAge.calculateVenusAge()).toEqual(3.1);
  })

  test('should correctly calculate mars age', () => {
    const marsAge = new PlanetAge(5);
    expect(marsAge.calculateMarsAge()).toEqual(9.4);
  })

  test('should correctly calculate jupiter age', () => {
    const jupiterAge = new PlanetAge(5);
    expect(jupiterAge.calculateJupiterAge()).toEqual(59.3);
  })

  test('should correctly return two decimal places for mercury', () => {
    const mercuryAge = new PlanetAge(1);
    expect(mercuryAge.calculateMercuryAge()).toEqual(.24);
  })

  test('should correctly calculate number of years remaining on mercury', () => {
    const mercuryRemainingAge = new PlanetAge(5);
    expect(mercuryRemainingAge.calculateMercuryRemaining()).toEqual(17.76);
  })

  test('should correctly calculate number of years remaining on venus', () => {
    const venusRemainingAge = new PlanetAge(5);
    expect(venusRemainingAge.calculateVenusRemaining()).toEqual(45.88);
  })

  test('should correctly calculate number of years remaining on mars', () => {
    const marsRemainingAge = new PlanetAge(5);
    expect(marsRemainingAge.calculateMarsRemaining()).toEqual(139.12);
  })
});