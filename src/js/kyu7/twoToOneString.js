function longest(s1, s2) {
  let a = [...s1.split(''), ...s2.split('')];

  let res = new Set(a);
  console.log(res);
  for (const a in res) {
    console.log(res[a]);
  }

  return Object.values(res).join('');
}
console.log(longest('aretheyhere', 'yestheyarehere'));
