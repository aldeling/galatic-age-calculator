export default function PlanetAge(age) {
  this.age = age;
};

PlanetAge.prototype.calculateMercuryAge = function() {
  let mercuryAge = (this.age * .24);
  return Math.round(mercuryAge*100)/100;
};

PlanetAge.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * .62);
  return Math.round(venusAge*100)/100;
};

PlanetAge.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 1.88);
  return Math.round(marsAge*100)/100;
};

PlanetAge.prototype.calculateJupiterAge = function() {
  let jupiterAge = (this.age * 11.86);
  return Math.round(jupiterAge*100)/100;
};

PlanetAge.prototype.calculateMercuryRemaining = function() {
  let mercuryRemainingAge = ((79 - this.age) * .24);
  return Math.round(mercuryRemainingAge*100)/100;
};

PlanetAge.prototype.calculateVenusRemaining = function() {
  let venusRemainingAge = ((79 - this.age) * .62);
  return Math.round(venusRemainingAge*100)/100;
};

PlanetAge.prototype.calculateMarsRemaining = function() {
  let marsRemainingAge = ((79 - this.age) * 1.88);
  return Math.round(marsRemainingAge*100)/100;
};

PlanetAge.prototype.calculateJupiterRemaining = function() {
  let jupiterRemainingAge = ((79 - this.age) * 11.86);
  return Math.round(jupiterRemainingAge*100)/100;
};