console.log('kyu8 checkSameCase');

function sameCase(a, b) {
  if (
    a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
  )
    return -1;
  let caseFirstArg = a === a.toLowerCase() ? 'lk' : 'uk';
  let caseSecondArg = b === b.toLowerCase() ? 'lk' : 'uk';

  return caseFirstArg === caseSecondArg ? 1 : 0;
}
console.log(sameCase('C', 'B'));
console.log(sameCase('b', 'a'));
console.log(sameCase('d', 'd'));
console.log(sameCase('c', 'B'));
console.log(sameCase('b', 'Z'));
console.log(sameCase('A', 's'));
console.log(sameCase('\t', 'Z'));
console.log(sameCase('H', ':'));
