let Users = require("./User");

class Patient extends Users {
  constructor(name, age, isNewPatient) {
    super(name, age);
    this.isNewPatient = isNewPatient;
  }
  isSick() {
    if (this.name == "macwan") return true;
    return false;
  }
}

module.exports = Patient;
