console.log('kyu7 debugSumOfDigits.js');

function getSumOfDigits(integer) {
  let sum = 0;
  const digits = integer.toString();
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(223));
console.log(getSumOfDigits(0));
