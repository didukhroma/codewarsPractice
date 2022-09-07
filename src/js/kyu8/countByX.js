function countBy(x, n) {
  const z = [];
  for (let i = x; i <= n; i = i + x) {
    z.push(i);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
