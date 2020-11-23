let beautifulBinaryString = () => {
  b = "0011010000010010";
  let str = "010";
  let strIdx = 0;
  let newString = "";
  let changes = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] == str[strIdx]) {
      if (strIdx == 2) {
        strIdx = 0;
        changes++;
        newString += "1";
        continue;
      }
      strIdx++;
    } else {
      strIdx = 0;
      if (b[i] == str[strIdx]) strIdx++;
    }
    newString += b[i];
  }
  //   console.log(newString);
  return changes;
};
