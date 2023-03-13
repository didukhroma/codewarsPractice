console.log('kyu-6-convertStringToCamelCase');

const toCamelCase = str =>
  str
    .split(/[-_]/gi)
    .map((el, i) => (i === 0 ? el : el[0].toUpperCase() + el.slice(1)))
    .join('');

console.log(
  toCamelCase(''),
  '',
  'An empty string was provided but not returned',
);
console.log(
  toCamelCase('the_stealth_warrior'),
  'theStealthWarrior',
  "toCamelCase('the_stealth_warrior') did not return correct value",
);
console.log(
  toCamelCase('The-Stealth-Warrior'),
  'TheStealthWarrior',
  "toCamelCase('The-Stealth-Warrior') did not return correct value",
);
console.log(
  toCamelCase('A-B-C'),
  'ABC',
  "toCamelCase('A-B-C') did not return correct value",
);
