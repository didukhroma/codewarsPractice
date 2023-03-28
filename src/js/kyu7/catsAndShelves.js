console.log('kyu-7-catsAndShelves');

// const solution = (start, finish) => {
//   let result = 0;
//   if (start === finish) return result;
//   const thirdJump =
//     start === 1
//       ? Math.trunc((finish - start + 1) / 3)
//       : Math.trunc((finish - start) / 3);

//   result = finish - (start + thirdJump * 3) + thirdJump;

//   return result;
// };

const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);

console.log(solution(1, 5), 2);
console.log(solution(1, 1), 0);
