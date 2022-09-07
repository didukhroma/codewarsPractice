function doTest(string) {
  for (let i = string.length; i >= 0; i--) {
    console.log(string[i]);
  }
  return '';
}

console.log(doTest('Hi!!!'));
