console.log('kyu8-removeExclamationMarks2');

// const remove = string => {
//   let index = string.length - 1;
//   for (let i = index; i > 0; i--) {
//     if (string[i].charCodeAt() !== 33) {
//       index = i;
//       break;
//     } else {
//       index = i;
//     }
//   }
//   return string
//     .split('')
//     .splice(0, index + 1)
//     .join('');
// };

// best practice
const remove = s => s.replace(/!+$/, '');

console.log(remove('Hi!'), 'Hi');
console.log(remove('!Hi'), '!Hi');
console.log(remove('!Hi!'), '!Hi');
console.log(remove('Hi! Hi!'), 'Hi! Hi');
console.log(remove('Hi'), 'Hi');
console.log(remove('Hi!!!'), 'Hi');
