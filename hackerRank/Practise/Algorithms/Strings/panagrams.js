let checkPanagram = () => {
  let qwerty = "qwertyuiopasdfghjklzxcvbnm";
  s = s.toLowerCase();

  let charHash = {};
  for (let i = 0; i < qwerty.length; i++) {
    charHash[qwerty[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (charHash[s[i]] != undefined) charHash[s[i]]++;
  }
  if (Object.values(charHash).includes(0)) {
    return "not pangram";
  } else {
    return "pangram";
  }
};
