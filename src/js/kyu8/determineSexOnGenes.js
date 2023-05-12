console.log('kyu-8determineSexOnGenes');

const chromosomeCheck = sperm =>
  `Congratulations! You're going to have a ${
    sperm === 'XY' ? `son` : `daughter`
  }.`;

console.log(chromosomeCheck('XY'));
