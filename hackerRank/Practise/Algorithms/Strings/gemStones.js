let gemstones = () => {
  //   arr = ["abcdde", "baccd", "eeabg"];
  arr = ["abc", "abc", "bc", "decb"];
  let log = console.log;
  let charSet = new Set(arr[0].split(""));
  let charSetCopy = charSet;
  for (let i of charSet) {
    for (let j = 1; j < arr.length; j++) {
      let currCharSet = new Set(arr[j].split(""));
      if (!currCharSet.has(i)) {
        charSetCopy.delete(i);
        break;
      }
    }
  }
  log([...charSetCopy]);
};
