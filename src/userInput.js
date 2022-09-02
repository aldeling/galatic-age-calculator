export default function UserInput(age) {
  this.age = age;
}

UserInput.prototype.planetAge = function() {
  let mercuryAge = (this.age * .24);
  return mercuryAge;
};