console.log('kyu-7-tripleShiftianNumbers');

// function tripleShiftian(base, n) {
//   let res = [...base];
//   //your code here
//   //for----------------------------------------------------------------
//   //   for (let i = 3; i <= n; i++) {
//   //     let num = 4 * res[i - 1] - 5 * res[i - 2] + 3 * res[i - 3];
//   //     res.push(num);
//   //     }
//   //----------------------------------------------------------------
//   //while
// //   let i = 3;
// //   while (i <= n) {
// //     let num = 4 * res[i - 1] - 5 * res[i - 2] + 3 * res[i - 3];
// //     res.push(num);
// //     i++;
// //   }
// //----------------------------------------------------------------

//   return res[n];
// }

//recursive function

const tripleShiftian = ([n1, n2, n3], n) =>
  n > 2
    ? tripleShiftian([n2, n3, 4 * n3 - 5 * n2 + 3 * n1], --n)
    : [n1, n2, n3][n];

console.log(tripleShiftian([1, 1, 1], 25), 1219856746);
console.log(tripleShiftian([1, 2, 3], 25), 2052198929);
console.log(tripleShiftian([3, 2, 1], 25), 2827228055);
console.log(tripleShiftian([6, 7, 2], 25), -2575238999);
console.log(tripleShiftian([1, 1, 1], 35), 10127083068293);
console.log(tripleShiftian([1, 2, 3], 35), 17037073417493);
console.log(tripleShiftian([3, 2, 1], 35), 23471258855679);
console.log(tripleShiftian([6, 7, 2], 35), -21379280887590);
console.log(tripleShiftian([3, 2, 1], 0), 3);
console.log(tripleShiftian([6, 7, 2], 2), 2);
