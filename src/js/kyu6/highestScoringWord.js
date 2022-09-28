console.log('kyu6 highestScoringWord');
function high(x) {
  const arr = x.split(' ');
  let result = arr.reduce(
    (acc, el) => {
      let elemValue = el
        .split('')
        .reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0);

      acc = elemValue > acc.value ? { word: el, value: elemValue } : acc;
      return acc;
    },
    { word: '', value: 0 },
  );
  return result.word;
}

console.log(high('man i need a taxi up to ubud'), '===', 'taxi');
console.log(high('what time are we climbing up the volcano'), '===', 'volcano');
console.log(high('take me to semynak'), '===', 'semynak');
console.log(high('aa b'), '===', 'aa');
console.log(high('b aa'), '===', 'b');
console.log(high('bb d'), '===', 'bb');
console.log(high('d bb'), '===', 'd');
console.log(high('aaa b'), '===', 'aaa');
