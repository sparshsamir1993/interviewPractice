let marsExploration = () => {
  s = "SOSSPSSQSSOR";
  let sosSignal = "SOS";
  let sIdx = 0;
  let changed = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != sosSignal[sIdx]) {
      changed++;
    }
    sIdx = sIdx + 1 > 2 ? 0 : sIdx + 1;
  }
  return changed;
};
