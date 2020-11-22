let ceasarCipher = () => {
  s =
    "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U";
  k = 62 % 26;
  let codeA = "a".charCodeAt(0) - 1;
  let codeAA = "A".charCodeAt(0) - 1;
  let charCode = {};
  let decodedCode = {};
  let charCodeA = {};
  let decodedCodeA = {};
  let dIdx = 1;
  for (let i = 1; i < 27; i++) {
    charCode[String.fromCharCode(codeA + i)] = i;
  }
  for (let i = 1; i < 27 - k; i++) {
    decodedCode[i] = String.fromCharCode(codeA + i + k);
  }
  for (let i = 27 - k; i < 27; i++) {
    decodedCode[i] = String.fromCharCode(codeA + dIdx);
    dIdx++;
  }

  dIdx = 1;
  // **** caps
  for (let i = 1; i < 27; i++) {
    charCodeA[String.fromCharCode(codeAA + i)] = i;
  }
  for (let i = 1; i < 27 - k; i++) {
    decodedCodeA[i] = String.fromCharCode(codeAA + i + k);
  }
  for (let i = 27 - k; i < 27; i++) {
    decodedCodeA[i] = String.fromCharCode(codeAA + dIdx);
    dIdx++;
  }
  let cipherrd = "";
  for (let i = 0; i < s.length; i++) {
    cipherrd =
      cipherrd +
      (decodedCode[charCode[s[i]]]
        ? decodedCode[charCode[s[i]]]
        : decodedCodeA[charCodeA[s[i]]]
        ? decodedCodeA[charCodeA[s[i]]]
        : s[i]);
  }
  console.log(charCode, decodedCode, charCodeA, decodedCodeA);
  return cipherrd;
};
