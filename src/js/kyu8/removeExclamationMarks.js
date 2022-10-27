console.log('kyu8 removeExclamationMarks.js');

const doTest = string => string.replace(/[!]/g, '') + '!';

console.log(doTest('Hi!'));
console.log(doTest('Hi!!!'));
console.log(doTest('!Hi'));
console.log(doTest('!Hi!'));
console.log(doTest('Hi! Hi!'));
console.log(doTest('Hi'));
