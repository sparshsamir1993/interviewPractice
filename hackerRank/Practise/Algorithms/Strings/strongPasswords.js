let minimumNumber = (n, password) => {
  //   password = "jnhqj";
  //   password = "790";
  //   password = "4700";
  //   password = "Ab1";
  password = "z0%Zb";
  // Return the minimum number of characters to make the password strong
  let casesPassed = 0;
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  let passLength = password.length;
  let gotDigit = false,
    gotLower = false,
    gotUpper = false,
    gotSpecial = false;

  for (let i = 0; i < password.length; i++) {
    if (!gotSpecial && special_characters.includes(password[i])) {
      casesPassed++;
      gotSpecial = true;
    }
    if (!gotDigit && numbers.includes(password[i])) {
      casesPassed++;
      gotDigit = true;
    }
    if (!gotLower && lower_case.includes(password[i])) {
      casesPassed++;
      gotLower = true;
    }
    if (!gotUpper && upper_case.includes(password[i])) {
      casesPassed++;
      gotUpper = true;
    }
  }
  let requiredChars = 0;
  if (passLength >= 6) {
    casesPassed++;
    requiredChars = 5 - casesPassed < 0 ? 0 : 5 - casesPassed;
  } else {
    let remCases = 5 - casesPassed;
    requiredChars =
      passLength + remCases > 6
        ? remCases - 1
        : remCases + (6 - (passLength + remCases));
  }
  console.log(casesPassed, requiredChars);
};
