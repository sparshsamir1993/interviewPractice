// Complete the isBalanced function below.

// function mainBracketCheck() {

//   output = output.split("\n");
//   //   console.log(output.trim().split("\n"));
//   //   console.log(resultArr);
//   for (let i = 0; i < output.length; i++) {
//     if (output[i].trim() != resultArr[i]) {
//       console.log(i);
//     }
//   }
//   //   return resultArr;
// }
function isBalanced(s) {
  s = s.split("");
  let sCopy = s;
  let checkStack = [];
  while (sCopy.length > 0) {
    let char = sCopy.shift();
    if (char === "(" || char === "{" || char === "[") {
      checkStack.push(char);
    } else if (char === ")") {
      let s = checkStack.pop();
      if (s !== "(") return "NO";
    } else if (char === "}") {
      let s = checkStack.pop();
      if (s !== "{") return "NO";
    } else if (char === "]") {
      let s = checkStack.pop();
      if (s !== "[") return "NO";
    }
  }
  return "YES";
}
