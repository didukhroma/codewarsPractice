const decrypt = str => {
  let a = str.split("'");
  return a;
};
console.log(decrypt("'101''99''105''108''65'"));
console.log(decrypt("'98''111''66'"));
console.log(decrypt('30 71'));
