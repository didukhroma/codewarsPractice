/*Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0*/
//------------------solution
//--------I-var-----------
// function elevatorDistance(array) {
//   let result = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     result +=
//       array[i] - array[i + 1] > 0
//         ? array[i] - array[i + 1]
//         : array[i + 1] - array[i];
//---------------------------------
// result += Math.abs(array[i] - array[i + 1]);
//   }
//   return result;
// }
//--------II-var-----------
const elevatorDistance = array =>
  array.slice(1).reduce((sum, element, index) => {
    return (sum += Math.abs(array[index] - element));
  }, 0);

console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([1, 2, 3]));
console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([3, 3]));
