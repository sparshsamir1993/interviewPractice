function balanceParanthesis(brackets) {
  let openStack = [];
  let count = 0;
  for (let i = 0; i < brackets.length; i++) {
    let currentBracket = brackets[i];
    if (
      currentBracket == "(" ||
      currentBracket == "{" ||
      currentBracket == "["
    ) {
      openStack.push(currentBracket);
      count++;
    } else {
      let poppedBracket = openStack.pop();
      if (currentBracket == ")") {
        if (poppedBracket != "(") {
          return false;
        }
      }
      if (currentBracket == "}") {
        if (poppedBracket != "{") {
          return false;
        }
      }
      if (currentBracket == "]") {
        if (poppedBracket != "[") {
          return false;
        }
      }
      count--;
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
}
