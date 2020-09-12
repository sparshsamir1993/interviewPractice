function allSubStrings(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length + 1; j++) {
      let newString = input.slice(i, j);
      result.push(newString);
    }
  }
  console.log(result);
}
