console.log('kyu8-drawStairs');

// function drawStairs(n) {
//   let result = '';
//   for (let i = 1; i <= n; i++) {
//     if (i === n) {
//       result += 'I';
//       break;
//     }
//     let space = '';
//     for (let j = 1; j <= i; j++) {
//       space += ' ';
//     }
//     result += 'I\n' + space;
//   }
//   return result;
// }

const drawStairs = n =>
  [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
// console.log(drawStairs(1));
// console.log('I');
console.log(drawStairs(2));
console.log('I\n I');
console.log(drawStairs(3));
console.log('I\n I\n  I');
// console.log(drawStairs(5), 'I\n I\n  I\n   I\n    I');
