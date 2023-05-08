console.log('kyu-7-fibonacciFizzBuzz.js');

const fibsFizzBuzz = n => {
  let res = [1, 1];
  if (n < 3) return res.slice(0, n);
  for (let i = 2; i < n; i++) {
    let num = res[i - 1] + res[i - 2];
    res.push(num);
  }
  return res.map(el => {
    if (el % 3 === 0 && el % 5 === 0) return 'FizzBuzz';
    if (el % 3 === 0) return 'Fizz';
    if (el % 5 === 0) return 'Buzz';
    return el;
  });
};

// console.log(fibsFizzBuzz(1), [1]);
// console.log(fibsFizzBuzz(2), [1, 1]);

// console.log(fibsFizzBuzz(5), [1, 1, 2, 'Fizz', 'Buzz']);
console.log(fibsFizzBuzz(20), [
  1,
  1,
  2,
  'Fizz',
  'Buzz',
  8,
  13,
  'Fizz',
  34,
  'Buzz',
  89,
  'Fizz',
  233,
  377,
  'Buzz',
  'Fizz',
  1597,
  2584,
  4181,
  'FizzBuzz',
]);
