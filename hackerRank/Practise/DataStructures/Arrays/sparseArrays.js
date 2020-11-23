let matchingStrings = () => {
  strings = [
    "abcde",
    "sdaklfj",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
    "na",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
  ];
  queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];
  let stringCount = {};
  for (let i of strings) {
    stringCount[i] ? stringCount[i]++ : (stringCount[i] = 1);
  }
  console.log(stringCount);
  let result = [];
  for (let i of queries) {
    result.push(stringCount[i] ? stringCount[i] : 0);
  }

  return result;
};
