console.log('kyu8-localizeBarycenterOfTriangle');

const barTriang = (p1, p2, p3) => [
  Number(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4)),
  Number(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)),
];

console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
console.log(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
console.log(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
console.log(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);
