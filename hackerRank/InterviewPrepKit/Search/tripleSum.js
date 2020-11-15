// Complete the triplets function below.
function triplets(a, b, c) {
  //   a = [1, 3, 5];
  //   b = [2, 3];
  //   c = [1, 2, 3];
  a = [1, 3, 5, 7];
  b = [5, 7, 9];
  c = [7, 9, 11, 13];
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);
  c = c.sort((a, b) => a - b);

  let bMax = Math.max(...b);
  a = a.filter((x) => x <= bMax);
  c = c.filter((x) => x <= bMax);
  let setA = new Set(a);
  let setB = new Set(b);
  let setC = new Set(c);
  a = [];
  setA.forEach((x) => a.push(x));
  b = [];
  setB.forEach((x) => b.push(x));
  c = [];
  setC.forEach((x) => c.push(x));

  console.log(a, b, c);
  let resultArr = [];
  let memoSet = new Set();
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    // createTriplets(a, b, c, 0, i, 0, resultArr, [], memoSet);
    let aIdx = 0;
    let countA = 0;
    while (aIdx < a.length && a[aIdx] <= b[i]) {
      countA++;
      aIdx++;
    }
    let cIdx = 0;
    let countB = 0;
    while (cIdx < c.length && c[cIdx] <= b[i]) {
      countB++;
      cIdx++;
    }
    count += countA * countB;
  }

  //   return memoSet;
  return count;
}

// function createTriplets(         // exceeded time limit
//   a,
//   b,
//   c,
//   aIdx,
//   bIdx,
//   cIdx,
//   resultArr,
//   currentArr,
//   memoSet
// ) {
//   currentArr = [a[aIdx], b[bIdx], c[cIdx]];
//   if (a[aIdx] <= b[bIdx] && c[cIdx] <= b[bIdx])
//     memoSet.add(currentArr.join(""));

//   if (aIdx + 1 < a.length)
//     if (!memoSet.has([a[aIdx + 1], b[bIdx], c[cIdx]].join("")))
//       if (a[aIdx + 1] <= b[bIdx] && c[cIdx] <= b[bIdx])
//         createTriplets(
//           a,
//           b,
//           c,
//           aIdx + 1,
//           bIdx,
//           cIdx,
//           resultArr,
//           currentArr,
//           memoSet
//         );
//   if (cIdx + 1 < c.length)
//     if (!memoSet.has([a[aIdx], b[bIdx], c[cIdx + 1]].join("")))
//       if (a[aIdx] <= b[bIdx] && c[cIdx + 1] <= b[bIdx])
//         createTriplets(
//           a,
//           b,
//           c,
//           aIdx,
//           bIdx,
//           cIdx + 1,
//           resultArr,
//           currentArr,
//           memoSet
//         );
// }
