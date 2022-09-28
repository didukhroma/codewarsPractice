console.log('kyu6 sortOddNumber');
function sortArray(array) {
  if (array.length === 0) return [];
  const sortedOddArray = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
  let index = 0;
  return array.map(el => {
    if (el % 2 === 0) return el;
    index++;
    return sortedOddArray[index - 1];
  });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]), []);
