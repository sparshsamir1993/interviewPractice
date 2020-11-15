//        callback hell chaining where each function returns a function
function chain(x, y, z) {
  if (!x) return 0;
  if (!y || !z) {
    return (y) => {
      return (z) => {
        return (x + y) * z;
      };
    };
  } else if (y && z) {
    return (x + y) * z;
  }
}

//        Better chaining, where each function return the whole object and chains with the result
class Chainable {
  chainOne(x) {
    this.multiply = 1;
    this.multiply *= x;
    return this;
  }
  chainTwo(x) {
    this.multiply *= x;
    return this;
  }
  print() {
    console.log(this.multiply);
  }
}
class Calculator {
  constructor() {
    this.value = 0;
  }
  sum(...args) {
    this.value = args.reduce((sum, curr) => {
      return sum + curr;
    });
    log(this.value);
    return this;
  }
  add(x) {
    this.value += x;
    log(this.value);
    return this;
  }
  subtract(x) {
    this.value -= x;
    log(this.value);
    return this;
  }
  multiply(x) {
    this.value *= x;
    log(this.value);
    return this;
  }
  divide(x) {
    this.value /= x;
    log(this.value);
    return this;
  }
}
