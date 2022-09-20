console.log('kyu8 isTheDateToday');

const isToday = date =>
  new Date(date).getDate() === new Date().getDate() ||
  new Date(date) === new Date();
console.log('🚀 ~ file: isTheDateToday.js ~ line 6 ~ new Date()', new Date());

console.log(isToday('2160-10-14T06:42:05.824Z'));
