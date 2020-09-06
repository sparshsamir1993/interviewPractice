let val = `WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS
FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC`;
function commonChild(s1, s2) {
  s1 = val.split("\n")[0];
  s2 = val.split("\n")[1];
  let matchMatrix = [];
  let max = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (!matchMatrix[i]) {
        matchMatrix[i] = [];
      }

      matchMatrix[i][j] = 0;
    }
  }
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      let prevRow = i - 1 < 0 ? 0 : i - 1;
      let prevColumn = j - 1 < 0 ? 0 : j - 1;
      if (s1[i] == s2[j]) {
        if (i == 0 || j == 0) {
          matchMatrix[i][j] = 0;
        }
        matchMatrix[i][j] = matchMatrix[prevRow][prevColumn] + 1;
        max = matchMatrix[i][j];
      } else {
        if (i == 0 || j == 0) {
          matchMatrix[i][j] = 0;
        }
        matchMatrix[i][j] = Math.max(
          matchMatrix[prevRow][j],
          matchMatrix[i][prevColumn]
        );
        if (matchMatrix[i][j] > max) {
          max = matchMatrix[i][j];
        }
      }
    }
  }
  return max;
}
