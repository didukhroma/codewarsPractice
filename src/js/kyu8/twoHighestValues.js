// const arr = [15, 20, 20, 17];
// const maxValue = Math.max.apply(Math, arr);

// const result = arr.reduce((acc, elem) => {
//   const maxValue = Math.max.apply(Math, arr);
// }, []);

// const twoHighest = arr => {
//   if (arr.length < 3) return arr.sort((a, b) => Number(b) - Number(a));

//   const maxValue = Math.max.apply(Math, arr);
//   const minValue = Math.min.apply(Math, arr);

//   if (maxValue === minValue) return [maxValue];

//   const result = arr.reduce(
//     (acc, elem) => {
//       if (elem !== maxValue && elem > acc[1]) {
//         acc = [maxValue, elem];
//       }
//       return acc;
//     },
//     [maxValue, minValue],
//   );
//   return result;
// };

// console.log(twoHighest([14, 15]));
// console.log(twoHighest([14]));
// console.log(twoHighest([]));
// console.log(twoHighest([1, 1, 1]));
// console.log(twoHighest([1, 2, 1]));
// console.log(twoHighest([2, 1, 1]));

function twoHighest(arr) {
  let a = [...new Set(arr)];
  return a.length != 0 ? a.sort((a, b) => b - a).slice(0, 2) : [];
}

console.log(twoHighest([15, 20, 20, 17]));
// console.log(
//   twoHighest([
//     51182, 35373, 22933, 7134, 66999, 28434, 65369, 8865, 73851, 99635, 97216,
//     12827, 49726, 7842, 73356, 50199, 81113, 62379, 64473, 31919, 55636, 68074,
//     38684, 47752, 25880, 548, 39486, 14870, 33625, 71136, 99543, 75837, 25600,
//     82672, 87868, 65583, 385, 23363, 40603, 6744, 5658, 27854, 19262, 86206,
//     89656, 44060, 27469, 33685,
//   ]),
// );
