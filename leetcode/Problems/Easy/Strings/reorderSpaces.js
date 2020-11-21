/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  text = "  hello";
  let spaceCount = 0;

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " ") {
      spaceCount++;
    }
  }
  let words = [];
  text.split(" ").map((x) => {
    if (x.length > 0) {
      words.push(x);
    }
  });
  let equalSpaces = Math.floor(spaceCount / (words.length - 1));
  let newSent = words.join(" ".repeat(equalSpaces));
  let spaceLeft = spaceCount - equalSpaces * (words.length - 1);
  if (spaceLeft > 0) {
    newSent = newSent + " ".repeat(spaceLeft);
  }
  return newSent;
};
