console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(0));

function noBoringZeros(n) {
  if (String(n).length === 1) return n;
  let a = ('' + n).split('').reduce((acc, el) => {
    if (acc % 10 === 0) acc = acc / 10;
    return acc;
  }, n);
  return a;
}
