class Users {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // isLoggedIn = false;
  setIsLoggedIn(value) {
    this.isLoggedIn = value;
  }

  getUserDetails() {
    return {
      name: this.name,
      age: this.age,
      isLoggedIn: this.isLoggedIn,
    };
  }
}

// let k = Users;

Users.prototype.isGenius = function () {
  if (this.name == "Sparsh") {
    return true;
  }
};

module.exports = Users;

// let sparsh = new Users("Sparsh", 26);

// console.dir(k);
// console.dir(sparsh.isGenius());
// console.dir(sparsh);
// sparsh.isLoggedIn = true;
