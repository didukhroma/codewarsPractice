console.log('kyu6 replaceWithAlphabetPosition');
const alphabetPosition = text =>
  text
    .replace(/[^a-zA-Z]/gi, '')
    .split('')
    .map(el => el.toLowerCase().charCodeAt(0) - 96)
    .join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('The narwhal bacons at midnight.'));
