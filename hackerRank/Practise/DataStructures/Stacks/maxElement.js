let findMaxElement = (input) => {
  //Enter your code here
  input = input.split("\n");
  // console.log(n);
  let stack = [];
  let max = 0,
    max2 = 0,
    max3 = 0,
    ans = "";
  for (let i = 1; i < input.length; i++) {
    let instruct = input[i][0];
    if (instruct == 1) {
      let elem = input[i].slice(2);
      stack.push(elem);
      max = Math.max(max, +elem);
    } else if (instruct == 2) {
      if (stack.pop() == max) {
        max = Math.max(...stack);
      }
    } else if (instruct == 3) {
      console.log(max);
    }
  }
};
