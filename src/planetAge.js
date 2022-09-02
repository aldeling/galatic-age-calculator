export default function PlanetAge(age) {
  this.age = age;
};

PlanetAge.prototype.calculateMercuryAge = function() {
  let mercuryAge = (this.age * .24);
  return Math.round(mercuryAge*10)/10;
};

PlanetAge.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * .62);
  return Math.round(venusAge*10)/10;
};

PlanetAge.prototype.calculateMarsAge = function() {
  let marsAge = (this.age * 1.88);
  return Math.round(marsAge*10)/10;
};