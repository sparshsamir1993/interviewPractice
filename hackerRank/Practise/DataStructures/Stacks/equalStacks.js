let equalStack = () => {
  h1 = [3, 2, 1, 1, 1];
  h2 = [4, 3, 2];
  h3 = [1, 1, 4, 1];
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0;
  let mxHt = Math.max(h1.length, h2.length, h3.length);
  let maxHt = 0;
  for (let i = 0; i < mxHt; i++) {
    sum1 += h1[i] ? h1[i] : 0;
    sum2 += h2[i] ? h2[i] : 0;
    sum3 += h3[i] ? h3[i] : 0;
  }
  let left1 = sum1,
    left2 = sum2,
    left3 = sum3;
  while (left1 != left2 && left2 != left3) {
    let min = Math.min(left1, left2, left3);
    console.log(min);
    if (left1 > min) {
      left1 = left1 - h1.shift();
    } else if (left2 > min) {
      left2 = left2 - h2.shift();
    } else if (left3 > min) {
      left3 = left3 - h3.shift();
    }
  }
  //   console.log(sum1, sum2, sum3, left1);
  return left1;
};
