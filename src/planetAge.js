export default function PlanetAge(age) {
  this.age = age;
};

PlanetAge.prototype.calculateMercuryAge = function() {
  let mercuryAge = (this.age * .24);
  return mercuryAge;
};

PlanetAge.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * .62);
  return venusAge;
};

PlanetAge.prototype.calculateMarsAge = function() {

};