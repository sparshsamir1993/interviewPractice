/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  n = 3;
  let result = [];
  if (n == 1) return ["()"];
  generateSolution(n, result, "", 0, 0, 0);
  console.log(result);
};

function generateSolution(
  n,
  result,
  currentString,
  currentPosition,
  openC,
  closeC
) {
  if (currentString.length == n * 2) {
    result.push(currentString);
    return;
  }
  if (currentString.length < n * 2) {
    if (openC < n) {
      generateSolution(
        n,
        result,
        currentString + ")",
        currentPosition + 1,
        openC + 1,
        closeC
      );
    }
    if (closeC < openC) {
      generateSolution(
        n,
        result,
        currentString + "(",
        currentPosition + 1,
        openC,
        closeC + 1
      );
    }
  }
}
