let str1 = '({} [] ({}))';
let str2 = '}}';

const isValid = str => {
  let pairBracket = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ];
  // let s = str.replace(/\s+/g, '');
  // console.log(s);
  let s2 = str.split('').filter(el => (el === ' ' ? '' : el));
  if (s2.length % 2 !== 0) return false;

  let result = 0;

  s2.forEach(el => {
    for (let i = 0; i < pairBracket.length; i++) {
      let elementIndex = pairBracket[i].indexOf(el);
      if (elementIndex === -1) continue;
      if (elementIndex === 0) {
        result += 1;
        break;
      }
      result -= 1;
      break;
    }
  });

  return result === 0 ? true : false;
};

console.log(isValid(str1));
console.log(isValid(str2));
