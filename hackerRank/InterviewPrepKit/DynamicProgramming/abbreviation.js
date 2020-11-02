function abbreviation(a, b) {
  // a =
  //   "ERreEerREeerErrrrRRyeReErrerrereEEeRRErRrrereeeeerErereerReRereeeeCrreErREreeerrRrRERreeererererEeEEeerrerrereeRRerreeerrreRererereeSerEeeRereerrReErrrereErrerrrreererrsRRecerEreeRrrreRereerErrRRrrEeEererRrrreRerReRrereererereEeereEereesrERreReeerReErEeeeeRererReereRereerRrrRRerrerreeereEeeereerrEreeERreReRrEErRRerEereeeRreeErReerrEerEeEreerrTeeeEErreRErrerreeeeereeEeerERErRrereerreerRrrreerEreeRrErreeeRReRerrreerrEreerrerEeEeerreeeeEeerRrrerrsrerrereReREerEerrRerRErereRreerRreRReEeeeRerRereeerRerererrerrrreeReeERereeeesrrEerrrreeeeerrrrereeeeeerRrRrreeereRrreeseERrrrerReeeerreeeeereEerErrrRrreeeerRerrrrrErRreREeeerrrrrrrErrreerrRrereerrRrEEErsREeeerReEeErrrrRrRererereeererreereeRreerrerREeEReereerrrrrrereereeeerEeeeerreerSrReererrRereREreereErEReEReeeerrerEeeEeeRreeeRreeeEreeeeEreerrrEeereeerrrrERrRERReeerreEeJEEeSEeeeEeEeeRrRrrreeeRerrreerEreeererEereeeeRRrreReRrEerreEreeeerEErRrRrrrrerrereeEERErerreerrRrrreeeErEeErEreRrErRrErrreeeereeerrrrSeReeeeRerrrrerrEreerEeeeeeeerrreerreRerrREr";
  // b =
  //   "ERREREERERRREERREERRERRREEEERRREREEECEREERRRERREEEERRREERRERRRRSERERERERERERRRRRREERREREERRREEERERRRRRRREREEESEREREREEEERRERERRRERRRRREEREREERERREERRERRERREREEEERRTEEEEREEREEEEEEEERERRRRERREERREREERRREREREEREEREEERRRERERERREEREERRERRERERERRRREEERRREERRRRREREREREEEEERRRRRRRREERRERRERRRERERRREEERRRRERRERERRRERRRREREERREEESREEREERRRERREEEERRERERREEREREEREERREEEEEERRRSRERREREEEERERREREEERRERREEEEEEEREEERERRERREREEJEESEEEEEEERRRREEREREEEEEERERRRRRRREEEEREERRREEREEERRREEEEREERRERRERRRSREEERERREERRRRER";
  // for (let i = 0; i < hcInputArr.length; i = i + 2) {
  //   a = hcInputArr[i];
  //   b = hcInputArr[i + 1];
  // a = "abAbAb";
  // b = "ABAB";
  a = "beFgH";
  b = "EFG";
  console.log(checkAbbreviation(a.split(""), b.split("")));
  // }
}

function checkAbbreviation(a, b) {
  let bCopy = [...b];
  let currentTarget = bCopy.pop();
  let currTry = "";
  let found = false;
  let answer = "";
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == currentTarget || a[i].toUpperCase() == currentTarget) {
      if (
        a[i - 1] &&
        a[i].toUpperCase() == a[i - 1].toUpperCase() &&
        bCopy.slice(0, 1)[0] &&
        bCopy.slice(0, 1)[0].toUpperCase() != a[i - 1].toUpperCase()
      ) {
        continue;
      }

      currTry += a[i];
      currentTarget = bCopy.pop();
    } else if (
      currTry.length > 0 &&
      a[i] == a[i].toUpperCase() &&
      currentTarget != a[i]
    ) {
      currTry = "";
      if (found) {
        answer = "NO";
      }
    } else if (
      currTry.length == 0 &&
      a[i] == a[i].toUpperCase() &&
      currentTarget != a[i]
    ) {
      answer = "NO";
      return "NO";
    }
    if (currTry.length == b.length) {
      found = true;
    }
  }
  if (found) answer = "YES";
  return answer.length ? answer : "NO";
}

// function checkAbbreviation(a, b) {
//   let bCopy = [...b];
//   let currentTarget = bCopy.pop();
//   let currTry = [];
//   let found = false;
//   if (!found) {
//   }
//   for (let i = a.length - 1; i >= 0; i--) {
//     if (currTry.length == 0 && a[i] == a[i].toLowerCase()) {
//       //if lower case
//       if (a[i] == currentTarget.toLowerCase()) {
//         currTry.push(a[i]);
//         currentTarget = bCopy.pop();
//       }
//     } else if (currTry.length == 0 && a[i] == a[i].toUpperCase()) {
//       if (a[i] != currentTarget.toUpperCase()) {
//         return "NO";
//       }
//       currTry.push(a[i]);
//       currentTarget = bCopy.pop();
//     } else if (currTry.length > 0 && a[i] == a[i].toLowerCase()) {
//       if (a[i] == currentTarget.toLowerCase()) {
//         currTry.push(a[i]);
//         currentTarget = bCopy.pop();
//       }
//     } else if (currTry.length > 0 && a[i] == a[i].toUpperCase()) {
//       if (a[i] == currentTarget.toUpperCase()) {
//         currTry.push(a[i]);
//         currentTarget = bCopy.pop();
//         if (currTry.length == b.length) {
//           console.log(currTry.reverse().join(""));
//         }
//       } else {
//         currTry = [];
//         bCopy = [...b];
//       }
//     }
//     if (currTry.length == b.length) {
//       console.log(currTry.reverse().join(""));
//     }
//   }
// }
