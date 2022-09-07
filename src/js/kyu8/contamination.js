const add = (a, b) => {
  const result = Number(a) + Number(b);
  return result < Number.MAX_SAFE_INTEGER
    ? String(result)
    : String(BigInt(a) + BigInt(b));
};

// console.log(add('1', '1'));
// console.log(add('123', '456'));
// console.log(add('888', '222'));
// console.log(add('1372', '69'));
// console.log(add('12', '456'));
// console.log(add('101', '100'));

console.log('91002328220491911630239667963');
// console.log(91002328220491911630239667963);
// console.log(BigInt(91002328220491911630239667963));
// console.log(Number.MAX_SAFE_INTEGER);
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
// '91002328220491911630239667963'
