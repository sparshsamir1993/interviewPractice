/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  //   s = "abBAcC";
  //   s = "leeEeeeEeetcCcooOOoode";
  //   s = "aBbAcC";
  //   s = "kkdsFuqUfSDKK";
  let newString = [];

  for (let i = 0; i < s.length; i++) {
    if (
      newString[newString.length - 1] &&
      ((newString[newString.length - 1] !=
        newString[newString.length - 1].toUpperCase() &&
        newString[newString.length - 1].toUpperCase() == s[i]) ||
        (s[i] != s[i].toUpperCase() &&
          newString[newString.length - 1] == s[i].toUpperCase()))
    ) {
      newString.pop();
    } else {
      newString.push(s[i]);
    }
  }
  console.log(newString.join(""));
};
