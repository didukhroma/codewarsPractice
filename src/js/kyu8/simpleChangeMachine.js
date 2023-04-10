console.log('kyu-8-simpleChangeMachine');
function changeMe(moneyIn) {
  // Write your function here
  const num = Number(moneyIn.replace(/[£p]/g, ''));
  if (
    !num ||
    (moneyIn[0] === '£' && num > 5) ||
    (moneyIn[0] !== '£' && num % 10 !== 0)
  )
    return moneyIn;

  const pence = moneyIn[0] === '£' ? num * 100 : num;

  if (moneyIn === '20p') return `10p 10p`;
  let result = '';

  let valueTwentyPence = Math.trunc(pence / 20);
  let valueTenPence = (pence - valueTwentyPence * 20) / 10;

  result = `${' 20p'.repeat(valueTwentyPence)}${' 10p'.repeat(valueTenPence)}`;

  return result.trim();
}

console.log(changeMe('£1'));
console.log(changeMe('money'));
console.log(changeMe('£10'));
console.log(changeMe('5p'));
