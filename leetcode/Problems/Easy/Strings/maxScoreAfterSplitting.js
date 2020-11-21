/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let leftScore = [0],
    rightScore = [0];
  getCharScore(s, leftScore, "0");
  let sReverse = s.split("").reverse().join("");
  getCharScore(sReverse, rightScore, "1");
  rightScore.reverse();
  let max = 0;
  for (let i = 0; i < leftScore.length; i++) {
    max = Math.max(max, leftScore[i] + rightScore[i]);
  }
  log(leftScore, rightScore, max);
};

let getCharScore = (string, scoreArr, charToCheck) => {
  if (string[0] == charToCheck) scoreArr[0] = 1;
  for (let i = 1; i < string.length - 1; i++) {
    if (string[i] == charToCheck) {
      scoreArr[i] = scoreArr[i - 1] + 1;
    } else {
      scoreArr[i] = scoreArr[i - 1];
    }
  }
};
