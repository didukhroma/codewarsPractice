console.log('kyu8-interpreters');

function HQ9(code) {
  let result = '';
  if (code === 'H') result = 'Hello World!';
  if (code === 'Q') result = code;
  if (code === '9') {
    // eslint-disable-next-line for-direction
    for (let i = 99; i > 0; i--) {
      if (i > 2) {
        result +=
          `${i} bottles of beer on the wall, ${i} bottles of beer.` +
          `\nTake one down and pass it around, ${
            i - 1
          } bottles of beer on the wall.\n`;
      } else {
        result +=
          `${i} bottles of beer on the wall, ${i} bottles of beer.\n` +
          `Take one down and pass it around, ${
            i - 1
          } bottle of beer on the wall.\n` +
          `${i - 1} bottle of beer on the wall, ${i - 1} bottle of beer.\n` +
          `Take one down and pass it around, no more bottles of beer on the wall.\n` +
          `No more bottles of beer on the wall, no more bottles of beer.\n` +
          `Go to the store and buy some more, 99 bottles of beer on the wall.`;
        break;
      }
    }
  }

  //finish me
  return result.length === 0 ? undefined : result;
}

console.log(HQ9('H'));
console.log(HQ9('Q'));
console.log(HQ9('9'));
console.log(HQ9('X'));
