/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  //   let log = console.log;
  //   words = ["mass", "as", "hero", "superhero"];
  words.sort((a, b) => a.length - b.length);
  let found = [];
  //   log(words);
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        found.push(words[i]);
        break;
      }
    }
  }
  //   log(found);
  return found;
};
