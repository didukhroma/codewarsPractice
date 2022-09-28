console.log('kyu6 splitString');
function solution(str) {
  let result = [];
  if (str.length === 0) return result;
  for (let i = 0; i < str.length; i = i + 2) {
    let string = str[i + 1] !== undefined ? str[i] + str[i + 1] : str[i] + '_';
    result.push(string);
  }
  return result;
}
console.log(solution('abcdef'));
console.log(solution('abcdefg'));
console.log(solution(''));
