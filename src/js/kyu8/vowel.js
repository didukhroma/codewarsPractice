const arr = [
  118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
  106,
];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const numberOfVowels = [];
vowels.forEach(elem => numberOfVowels.push(elem.charCodeAt()));

const result = arr.reduce((acc, elem) => {
  const index = numberOfVowels.indexOf(elem);
  if (index === -1) {
    acc.push(elem);
  } else acc.push(vowels[index]);
  return acc;
}, []);
console.log(vowels);
console.log(numberOfVowels);
console.log(result);
