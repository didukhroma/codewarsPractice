console.log('kyu-7-powerOfTwo');
function isPowerOfTwo(n) {
  let result = false;
  for (let i = 0; i < 100; i++) {
    if (n === Math.pow(2, i)) result = true;
    if (Math.pow(2, i) > n) break;
  }
  return result;
}

// const isPowerOfTwo = n => Number.isInteger(Math.log2(n)) ;
console.log(isPowerOfTwo(2), true);
console.log(isPowerOfTwo(4096), true);
console.log(isPowerOfTwo(5), false);
