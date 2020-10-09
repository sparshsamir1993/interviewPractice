function longestSubsequence() {
  //   let str1 = "afchdjgqhopi";
  // let str2 = "ecdghi";
  let str1 = "oxcpqrsvwf";
  let str2 = "shmtulqrypy";

  let str1Cpy = str1;
  let count = 0;
  let matrix = Array(str1.length + 1)
    .fill(0)
    .map((_) => Array(str2.length + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= str1Cpy.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      let s2Ch = str2[j - 1];
      let s1Ch = str1Cpy[i - 1];
      if (s1Ch == s2Ch) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLen) {
          maxLen = matrix[i][j];
        }
      } else {
        let max = matrix[i - 1][j] ? matrix[i - 1][j] : 0;
        let prevCol = matrix[i][j - 1] ? matrix[i][j - 1] : 0;
        if (prevCol > max) {
          max = matrix[i][j - 1];
        }
        matrix[i][j] = max;
      }
    }
  }
  console.log(maxLen);
}
