export default function PlanetAge(age) {
  this.age = age;
};

PlanetAge.prototype.calculateMercuryAge = function() {
  let mercuryAge = (this.age * .24);
  return Math.round(mercuryAge*100)/100;
};

PlanetAge.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * .62);
  return Math.round(venusAge*10)/10;
};

PlanetAge.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 1.88);
  return Math.round(marsAge*10)/10;
};

PlanetAge.prototype.calculateJupiterAge = function() {
  let jupiterAge = (this.age * 11.86);
  return Math.round(jupiterAge*10)/10;
}