function sherlockAnagrams(input) {
  let s = "mom";
  let countHash = {};
  let charCountHash = {};
  let substrings = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let found = {};
    for (let j = 0; j + i <= input.length; j++) {
      let substr = input.substr(j, i);
      if (substr) {
        substr = substr.split("").sort().join("");
        if (found[substr]) {
          count += found[substr];
          found[substr]++;
        } else {
          found[substr] = 1;
        }
      }
      //   let newString = input.slice(i, j);
      //   substrings.push(newString);
      //   if (!charCountHash.hasOwnProperty(newString)) {
      //     let charHash = {};
      //     for (let k = 0; k < newString.length; k++) {
      //       if (!charHash.hasOwnProperty(newString[k])) {
      //         charHash[newString[k]] = 1;
      //       } else {
      //         charHash[newString[k]] += 1;
      //       }
      //     }
      //     charCountHash[newString] = charHash;
      //   }
    }
  }
  return count;
  //   console.log(charCountHash);
  //   substrings = substrings.sort((a, b) => a.length - b.length);
  //   console.log(substrings);
  //   let anagrams = 0;
  //   let anagramHash = {};
  //   for (let i = 0; i < substrings.length; i++) {
  //     for (let j = i + 1; j < substrings.length; j++) {
  //       if (substrings[i].length != substrings[j].length) {
  //         continue;
  //       }
  //       let { ...currStringHash } = charCountHash[substrings[j]];
  //       //   console.log(currStringHash);
  //       let isAnagram = true;
  //       if (
  //         anagramHash[substrings[i]] &&
  //         anagramHash[substrings[i]] == anagramHash[substrings[j]]
  //       ) {
  //         anagrams++;
  //         console.log(anagramHash);
  //         continue;
  //       }

  //       for (let k = 0; k < substrings[i].length; k++) {
  //         let currChar = substrings[i][k];
  //         // console.log(currChar);
  //         if (!currStringHash.hasOwnProperty(currChar)) {
  //           isAnagram = false;
  //           break;
  //         }
  //         currStringHash[currChar] -= 1;
  //         // console.log(currStringHash);
  //         if (currStringHash[currChar] < 0) {
  //           isAnagram = false;
  //           break;
  //         }
  //       }
  //       if (isAnagram) {
  //         console.log(substrings[i], substrings[j]);
  //         anagramHash[substrings[i]] = substrings[j];
  //         anagrams++;
  //       }
  //     }
  //   }
  //   console.log(anagrams);
}
