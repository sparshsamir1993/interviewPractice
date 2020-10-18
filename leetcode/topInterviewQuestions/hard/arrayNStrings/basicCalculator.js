/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = "1+2*5/3+6/4*2";
  //   s = "1-1-1";
  //   s = " 3+5 / 2 ";
  let copy = s;
  copy = copy.trim().split("");
  let numbers = [];
  let actions = [];
  let char = copy.shift();
  let currentNumber = "";
  while (char != undefined) {
    if (/[0-9]/.test(char)) {
      currentNumber += char;
    }
    if (/[-+/*]/.test(char)) {
      if (currentNumber.length) {
        let prev = numbers.pop();

        if (prev == "-") {
          numbers.push("+");
          numbers.push(-1 * currentNumber);
          numbers.push(char);
          char = copy.shift();

          currentNumber = "";
          continue;
        } else {
          if (prev) numbers.push(prev);
        }
        numbers.push(+currentNumber);
        currentNumber = "";
      }

      numbers.push(char);
    }
    char = copy.shift();
  }
  if (currentNumber.length) {
    let prev = numbers.pop();

    if (prev == "-") {
      numbers.push("+");
      numbers.push(-1 * currentNumber);
    } else {
      if (prev) numbers.push(prev);
      numbers.push(+currentNumber);
      currentNumber = "";
    }
  }
  copy = [...numbers];
  char = copy.shift();
  let result = [];

  while (char != undefined) {
    if (char == "/") {
      let prev = result.pop();
      let next = copy.shift();
      let toPut = prev / next >= 0 ? prev / next : prev / next;
      result.push(toPut);
    } else {
      result.push(char);
    }
    char = copy.shift();
  }
  copy = [...result];
  char = copy.shift();
  result = [];

  while (char != undefined) {
    if (char == "*") {
      let prev = result.pop();
      let next = copy.shift();
      result.push(next * prev);
    } else {
      result.push(char);
    }
    char = copy.shift();
  }
  copy = [...result];
  char = copy.shift();
  result = [];
  while (char != undefined) {
    if (char == "+") {
      let prev = result.pop();
      let next = copy.shift();
      result.push(next + prev);
    } else {
      result.push(char);
    }
    char = copy.shift();
  }
  copy = [...result];
  char = copy.shift();
  result = [];

  while (char != undefined) {
    if (char == "-") {
      let prev = result.pop();
      let next = copy.shift();
      result.push(next - prev);
    } else {
      result.push(char);
    }
    char = copy.shift();
  }

  char = copy.shift();

  console.log(result[0]);
};
