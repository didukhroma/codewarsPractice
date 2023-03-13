console.log('kyu-7-changingLetters.js');
// const swap = string =>
//   string
//     .split('')
//     .map(el => ('aeiou'.includes(el) ? el.toUpperCase() : el))
//     .join('');

const swap = string => string.replace(/[aeiou]/gi, char => char.toUpperCase());

//   swap('', '');
//   swap('   @@@', '   @@@');
console.log(swap('HelloWorld!', 'HEllOWOrld!'));
//   swap('Sunday', 'SUndAy');
//   swap('Codewars', 'COdEwArs');
//   swap('Monday', 'MOndAy');
//   swap('Friday', 'FrIdAy');
//   swap('abracadabra', 'AbrAcAdAbrA');
//   swap('AbrAcAdAbrA', 'AbrAcAdAbrA');
//   swap('ABRACADABRA', 'ABRACADABRA');
//   swap('aBRaCaDaBRa', 'ABRACADABRA');
