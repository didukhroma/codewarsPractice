console.log('kyu-6-tripleTrouble.js');

function tripledouble(num1, num2) {
  let num = 0;
  for (let i = num; i < 10; i++) {
    num = i;
    if (String(num1).includes(`${num}${num}${num}`)) {
      break;
    }
    continue;
  }

  return String(num2).includes(`${num}${num}`) ? 1 : 0;
  //code me
}

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);
