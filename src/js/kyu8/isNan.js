console.log('kyu8 isNan');

const isDigit = s => parseFloat(s) === Number(s);
console.log('------------------------');
console.log('true');
console.log(isDigit('3'));
console.log(isDigit(' 3 '));
console.log(isDigit('-3.25'));
console.log('------------------------');
console.log('false');
console.log(isDigit('3-4'));
console.log(isDigit(' 3 5'));
console.log(isDigit('3 5'));
console.log(isDigit('zero'));
