//From 423 in LeetCode
/**
 * @param {string} s
 * @return {string}
 */
function originalDigits(s) {
  //z = zero ++ one --
  //g = eight ++ three -- nine --
  //x = six ++ nine --
  //u = four ++ one -- substract from 5 at end
  //w = two ++ one --
  //f = five ++ substract from seven, nine at end
  //v = seven ++
  //h = three ++
  //o = one ++
  //i = nine ++
  let worthy = s
    .split('')
    .filter(x => ['z', 'g', 'x', 'u', 'w', 'f', 'v', 'h', 'o', 'i'].includes(x))
    .reduce(
      (acc, curr) => {
        switch (curr) {
          case 'z':
            acc[0]++;
            acc[1]--;
            return acc;
          case 'g':
            acc[8]++;
            acc[3]--;
            acc[9]--;
            return acc;
          case 'x':
            acc[6]++;
            acc[9]--;
            return acc;
          case 'u':
            acc[4]++;
            acc[1]--;
            return acc;
          case 'w':
            acc[2]++;
            acc[1]--;
            return acc;
          case 'f':
            acc[5]++;
            return acc;
          case 'v':
            acc[7]++;
            return acc;
          case 'h':
            acc[3]++;
            return acc;
          case 'o':
            acc[1]++;
            return acc;
          default:
            acc[9]++;
            return acc;
        }
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 0: 0 },
    );
  let result = '';
  worthy[5] = worthy[5] - worthy[4];
  worthy[7] = worthy[7] - worthy[5];
  worthy[9] = worthy[9] - worthy[5];
  for (let a in worthy) {
    if (worthy[a] > 0) {
      for (let i = 0; i < worthy[a]; i++) {
        result += a;
      }
    }
  }
  return result;
}
