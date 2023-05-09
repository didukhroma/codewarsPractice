console.log('kyu-6-areTheSame');

const comp = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  let sortArr1 = array1.map(el => Math.pow(el, 2)).sort((a, b) => a - b);
  let sortArr2 = array2.sort((a, b) => a - b);

  return JSON.stringify(sortArr1) === JSON.stringify(sortArr2);
};

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

console.log(comp(a1, a2), true);
