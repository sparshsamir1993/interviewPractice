function activityNotifications(expenditure, d) {
  expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
  //   expenditure = [1, 2, 3, 4, 4];
  d = 5;

  let countDArr = Array(201).fill(0);
  let countArr = Array(201).fill(0);
  for (let i = 0; i < expenditure.length; i++) {
    countArr[expenditure[i]]++;
  }

  for (let i = 0; i < d; i++) {
    countDArr[expenditure[i]]++;
  }
  let sumArr = [countDArr[0]];
  for (let i = 1; i < d; i++) {
    sumArr[i] = sumArr[i - 1] + countDArr[i];
  }

  for (let i = d; i < expenditure.length; i++) {
    countDArr[expenditure[i]];
  }
  console.log(countArr, countDArr, sumArr);
}

// // Complete the activityNotifications function below.
// function activityNotifications(expenditure, d) {
//   let expenditureSorted = [...expenditure];
//   expenditureSorted.sort((a, b) => a - b);
//   let prevTrans = expenditureSorted.slice(0, d);
//   let notifications = 0;
//   for (let i = 0; i < expenditure.length; i++) {
//     if (i > d - 1) {
//       let arrLen = i - 1 - (i - d);
//       if (arrLen % 2 == 0) {
//         let median = prevTrans[arrLen / 2];
//         if (median != undefined && expenditure[i] >= median * 2) {
//           notifications++;
//         }
//       } else {
//         let upper = prevTrans[Math.floor(arrLen / 2)];
//         let lower = prevTrans[Math.ceil(arrLen / 2)];
//         if (lower != undefined && upper != undefined) {
//           let median = (lower + upper) / 2;
//           if (median != undefined && expenditure[i] >= median * 2) {
//             notifications++;
//           }
//         }
//       }
//       if (expenditure[i] >= Math.max(...prevTrans)) {
//         prevTrans.shift();
//         prevTrans.push(expenditure[i]);
//       } else if (expenditure[i] <= Math.min(...prevTrans)) {
//         prevTrans.pop();
//         prevTrans = [expenditure[i], ...prevTrans];
//       } else {
//         prevTrans.shift();
//         prevTrans.push(expenditure[i]);
//         prevTrans.sort((a, b) => a - b);
//       }
//     }
//   }
//   return notifications;
// }

//   expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
//   expenditure = [1, 2, 3, 4, 4];
//   d = 4;
