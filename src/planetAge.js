export default function PlanetAge(age) {
  this.age = age;
}

PlanetAge.prototype.calculatePlanetAge = function() {
  let mercuryAge = (this.age * .24);
  return mercuryAge;
};

PlanetAge.prototype.calculateVenusAge = function() {
  let venusAge = (this.age * .62);
  return venusAge;
}