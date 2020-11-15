function sumPerimeter(matrix) {
  matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];

  let matCopy = [...matrix];
  let pSum = 0;
  let firstRow = matCopy.shift();
  let lastRow = matCopy.pop();
  firstRow.map((x, i) => {
    pSum += firstRow[i];
    pSum += lastRow[i];
  }); //1stRow
  for (let i = 0; i < matCopy.length; i++) {
    let currentRow = matCopy[i];
    pSum += currentRow[currentRow.length - 1];
    currentRow[currentRow.length - 1] = 0;
    pSum += currentRow[0];
    currentRow[0] = 0;
  }

  //   lastRow.forEach((x) => (pSum += x)); //lastRow
  //   for (let i = 0; i < matCopy.length; i++) {
  //     let currentRow = matCopy[i];
  //   }

  return pSum;
}
