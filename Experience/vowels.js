function hasVowels(strArr, query) {
  strArr = ["aba", "bcb", "ece", "aa", "efi", "io", "ko"];
  query = ["1-3", "2-5", "2-2", "1-5", "1-6"];
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let dpArr = [];
  let resultArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i == 0) {
      dpArr[0] = 0;
    } else {
      dpArr[i] = dpArr[i - 1];
    }
    if (
      vowelSet.has(strArr[i][0]) &&
      vowelSet.has(strArr[i][strArr[i].length - 1])
    ) {
      if (i == 0) {
        dpArr[0] = 1;
      } else {
        dpArr[i] = dpArr[i - 1] + 1;
      }
    }
  }
  for (let i = 0; i < query.length; i++) {
    let startIndex = +query[i].split("-")[0] - 1;
    let endIndex = +query[i].split("-")[1] - 1;
    if (startIndex == 0) {
      resultArr.push(dpArr[endIndex]);
    } else {
      resultArr.push(dpArr[endIndex] - dpArr[startIndex - 1]);
    }
  }
  console.log(resultArr);
}

// for (let i = 0; i < strArr.length; i++) {
//     booleanArr.push(
//       vowelSet.has(strArr[i][0]) &&
//         vowelSet.has(strArr[i][strArr[i].length - 1])
//     );
//     if (booleanArr[i]) {
//       totalCount++;
//     }
//   }
//   let resultArr = [];
//   for (let i = 0; i < query.length; i++) {
//     let currentQuery = query[i];
//     let startIndex = +currentQuery.split("-")[0] - 1;
//     let endIndex = +currentQuery.split("-")[1] - 1;
//     if (startIndex == endIndex) {
//       if (booleanArr[startIndex]) {
//         resultArr.push(1);
//       } else {
//         resultArr.push(0);
//       }
//       continue;
//     }
//     if (endIndex - startIndex + 1 == strArr.length) {
//       resultArr.push(totalCount);
//       continue;
//     }
//     let currentCount = 0;
//     for (let j = startIndex; j <= endIndex; j++) {
//       if (booleanArr[j]) {
//         currentCount++;
//       }
//     }
//     resultArr.push(currentCount);
//   }
//   returgenn rpactesultArr;
