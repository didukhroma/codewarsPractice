function validateHello(greetings) {
  const variables = [
    'hello',
    'ciao',
    'salut',
    'ciao',
    'hallo',
    'hola',
    'ahoj',
    'czesc',
  ];
  let result = false;
  for (let i = 0; i < variables.length; i++) {
    // console.log(greetings.includes(variables[i]));
    if (greetings.includes(variables[i])) {
      result = true;
      break;
    }
  }

  return result;
}

console.log(validateHello('ahoj'));
console.log(validateHello('meh'));
