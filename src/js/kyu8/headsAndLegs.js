console.log('kyu8 headsAndLegs');

function animals(heads, legs) {
  if (heads < 0 || legs < 0) return 'No solutions';
  if (heads === 0 && legs === 0) return [0, 0];
  if (legs / heads === 2) return [heads, 0];
  if (legs / heads === 4) return [0, heads];

  let cow = 0;
  for (let i = 1; i <= heads; i++) {
    if (((legs - i * 4) / (heads - i)) % 2 === 0) {
      cow = i;
      break;
    }
    continue;
  }
  let chicken = heads - cow;
  if (chicken * 2 + cow * 4 !== legs) return 'No solutions';

  let result = [chicken, cow];

  return result;
}

console.log(animals(0, 0));
console.log(animals(72, 200));
console.log(animals(116, 282));

console.log(animals(12, 24));
console.log(animals(6, 24));
console.log(animals(344, 872));
console.log(animals(158, 616));
console.log('-----------------------');
console.log(animals(12, 25));
