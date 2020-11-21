let primeFactors = (num) => {
  num = 111;
  let numCopy = num;
  let start = 2;
  let result = [];
  while (numCopy > 1) {
    if (numCopy % start == 0) {
      numCopy = numCopy / start;
      result.push(start);
    } else {
      start++;
    }
  }
  console.log(result);
};
