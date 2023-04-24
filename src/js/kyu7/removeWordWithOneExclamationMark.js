console.log('kyu-7-removeWordWithOneExclamationMark');
const remove = string =>
  string
    .split(' ')
    .filter(el => el.split('').filter(item => item === '!').length !== 1)
    .join(' ');

console.log(remove('Hi!'), '-', '');
console.log(remove('Hi! Hi!'), '-', '');
console.log(remove('Hi! Hi! Hi!'), '-', '');
console.log(remove('Hi Hi! Hi!'), '-', 'Hi');
console.log(remove('Hi! !Hi Hi!'), '-', '');
console.log(remove('Hi! Hi!! Hi!'), '-', 'Hi!!');
console.log(remove('Hi! !Hi! Hi!'), '-', '!Hi!');
