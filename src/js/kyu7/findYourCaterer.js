console.log('kyu-7-findYourCaterer');

const findCaterer = (budget, people) => {
  if (people < 1) return -1;
  const caterer1 = 15;
  const caterer2 = 25;
  const caterer3 = people <= 60 ? 30 : 30 * 0.8;

  let num = budget / people;
  if (num < caterer1) return -1;

  //   if (num >= caterer3) return 3;
  //   if (num < caterer2) return 1;

  console.log(num);
  console.log(caterer2);
  console.log(num < caterer2);

  if (num >= caterer3) {
    return 3;
  } else if (num < caterer2) {
    return 1;
  } else {
    return 2;
  }
};

// console.log(1, findCaterer(150, 10));
// console.log(2, findCaterer(1500, 60));
// console.log(3, findCaterer(1500, 61));
// console.log(-1, findCaterer(100, 0));
// console.log(3, findCaterer(200, 5));
console.log(2, findCaterer(1000, 45));
// console.log(-1, findCaterer(940, 70));
