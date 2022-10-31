console.log('kyu5-stringIncrement');

const incrementString = string => {
  //find last number
  let resNumberArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    if (!Number.isNaN(Number(string[i]))) {
      resNumberArray.unshift(string[i]);
    } else break;
  }

  let resNumber = Number(resNumberArray.join('')) + 1;

  //operation with number String
  let resNumberString = resNumber + '';
  for (let j = 0; j < resNumberArray.length; j++) {
    if (resNumberString.length >= resNumberArray.length) break;
    resNumberString = '0' + resNumberString;
  }

  //operation with main String
  let mainString = string
    .split('')
    .slice(0, string.length - resNumberArray.length)
    .join('');
  //result string
  let resultString = mainString + resNumberString;
  return resultString;
};

// best solution
// const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));

//-----------------------------------------------------------------------------
console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foobar999'), 'foobar1000');
console.log(incrementString('foobar00999'), 'foobar01000');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar1'), 'foobar2');
console.log(incrementString('1'), '2');
console.log(incrementString('009'), '010');
console.log(incrementString('fo99obar99'), 'fo99obar100');
