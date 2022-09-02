export default class PlanetAge{
  constructor(age) {
    this.age = age;
  }

  calculateMercuryAge() {
    let mercuryAge = (this.age * .24);
    return Math.round(mercuryAge*100)/100;
  };

  calculateVenusAge() {
    let venusAge = (this.age * .62);
    return Math.round(venusAge*100)/100;
  };

  calculateMarsAge() {
    let marsAge = (this.age * 1.88);
    return Math.round(marsAge*100)/100;
  };

  calculateJupiterAge() {
    let jupiterAge = (this.age * 11.86);
    return Math.round(jupiterAge*100)/100;
  };

  calculateMercuryRemaining() {
    let mercuryRemainingAge = ((79 - this.age) * .24);
    if (mercuryRemainingAge < 0) {
      return Math.round((mercuryRemainingAge*(-1))*100)/100;
    }
    return Math.round(mercuryRemainingAge*100)/100;
  };

  calculateVenusRemaining() {
    let venusRemainingAge = ((79 - this.age) * .62);
    if (venusRemainingAge < 0) {
      return Math.round((venusRemainingAge*(-1))*100)/100;
    }
    return Math.round(venusRemainingAge*100)/100;
  };

  calculateMarsRemaining() {
    let marsRemainingAge = ((79 - this.age) * 1.88);
    if (marsRemainingAge < 0) {
      return Math.round((marsRemainingAge*(-1))*100)/100;
    }
    return Math.round(marsRemainingAge*100)/100;
  };

  calculateJupiterRemaining() {
    let jupiterRemainingAge = ((79 - this.age) * 11.86);
    if (jupiterRemainingAge < 0) {
      return Math.round((jupiterRemainingAge*(-1))*100)/100;
    }
    return Math.round(jupiterRemainingAge*100)/100;
  };
};