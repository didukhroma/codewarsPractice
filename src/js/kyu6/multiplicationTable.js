console.log('kyu-6-multiplicationTable');

const multiplicationTable = size => {
  let res = [];
  let first = Array.from(Array(size).keys()).map(el => el + 1);
  res.push(first);
  for (let i = 2; i <= size; i++) {
    res.push(first.map(el => el * i));
  }
  return res;
  // return Array.from({ length: size }, (_, i) =>
  //   Array.from({ length: size }, (_, j) => (i + 1) * (j + 1)),
  // );
};

console.table(multiplicationTable(3));
console.log('---------------------');
console.table(multiplicationTable(2));
console.log('---------------------');
console.table(multiplicationTable(4));
