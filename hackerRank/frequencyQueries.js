function frequencyQueries() {
  let queries = [
    [1, 5],
    [1, 6],
    [3, 2],
    [1, 10],
    [1, 10],
    [1, 6],
    [2, 5],
    [3, 2],
  ];
  let numberArr = [];
  let numHash = {};
  let freqArr = [];
  let outputArr = [];
  for (let i = 0; i < queries.length; i++) {
    let currentQuery = queries[i];
    let op = currentQuery[0];
    let number = currentQuery[1];
    let init = numHash[number] || 0;
    if (op == 1) {
      if (!numHash[number]) {
        numHash[number] = 1;
        freqArr[number] = 1;
      } else {
        numHash[number] += 1;
        freqArr[number] += 1;
      }
    } else if (op == 2 && init > 0) {
      numHash[number] -= 1;
      freqArr[number] -= 1;
    } else if (op == 3) {
      if (freqArr.includes(number)) {
        outputArr.push(1);
      } else {
        outputArr.push(0);
      }
    }
  }
  return outputArr;
}
