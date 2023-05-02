console.log('kyu-7-stringEndsWith');

const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
console.log(solution('abcabc', 'bc'), true);
console.log(solution('abcabc', ''), true);
