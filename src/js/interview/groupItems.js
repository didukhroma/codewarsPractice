let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

const groupBy = array =>
  array.reduce((acc, item) => {
    Object.prototype.hasOwnProperty.call(acc, item.age)
      ? acc[item.age].push(item)
      : (acc[item.age] = [...item]);
    return acc;
  }, {});

console.log(groupBy(people));
