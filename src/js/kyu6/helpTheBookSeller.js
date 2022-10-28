console.log('kyu6 helpTheBookseller.js');

const b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
const c = ['A', 'B', 'C', 'D'];

function stockList(listOfArt, listOfCat) {
  let result = '';
  if (listOfArt.length === 0 || listOfCat === 0) return result;
  // create clean categories list
  const cleanListOfCategories = {};
  listOfCat.map(el => (cleanListOfCategories[el] = 0));
  // add amount of books to each categories
  const listCategories = listOfArt.reduce((acc, el) => {
    const elementArr = el.split(' ');
    if (!listOfCat.includes(elementArr[0][0])) return acc;
    acc[elementArr[0][0]] += Number(elementArr[1]);
    return acc;
  }, cleanListOfCategories);
  // create resulting template string
  for (const property in listCategories) {
    result +=
      result.length === 0
        ? `(${property} : ${listCategories[property]})`
        : ` - (${property} : ${listCategories[property]})`;
  }
  return result;
}

// console.log('(A : 0) - (B : 1290) - (C : 515) - (D : 600)');
// console.log(stockList(b, c));
// console.log('---------------------');

const b1 = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
const c1 = ['A', 'B'];
console.log('(A : 200) - (B : 1140)');
console.log(stockList(b1, c1));
