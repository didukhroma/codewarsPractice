console.log('LeetCode AddTwoNumbers');
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
//
const l3 = [0];
const l4 = [0];
//
const l5 = [9, 9, 9, 9, 9, 9, 9];
const l6 = [9, 9, 9, 9];

const addTwoNumbers = (num1, num2) => {
  let n1 = num1.reverse().join('');
  let n2 = num2.reverse().join('');

  return String(Number(n1) + Number(n2)).split('');
};

console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers(l3, l4));
console.log(addTwoNumbers(l5, l6));
