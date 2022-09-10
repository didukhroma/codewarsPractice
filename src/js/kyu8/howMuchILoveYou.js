console.log('howMuchILoveYou');

function howMuchILoveYou(nbPetals) {
  const variables = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  return variables[(nbPetals - 1) % variables.length];
}

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(12));
