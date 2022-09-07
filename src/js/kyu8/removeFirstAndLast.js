const arr = '1,2,3';
const arr1 = '1,2,3,4';
const arr2 = '1,2,3,4,5';

const array = arr => {
  console.log(arr);
  const newArr = arr.split(',');

  const a = newArr.slice(1, newArr.length - 1).join(' ');
  // const a = newArr.slice(1, newArr.length - 1).join(' ');
  console.log(newArr);
  console.log(a);
};

array(arr);
array(arr1);
array(arr2);
