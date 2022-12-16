console.log('kyu8-countCubes');

// const countSquares = function(cuts){
//     if(cuts === 0) return 1;

//     const layer = cuts +1;
//     const fullLayer = 2;
//     const unFullLayer = layer -2;
//     const amountOfCubes = fullLayer * Math.pow(cuts+1,2) + unFullLayer * Math.pow(cuts+1,2) - unFullLayer*Math.pow(cuts-1,2);
//       // const amountOfCubes = Math.pow(cuts+1,2)*( 2+ (cuts-1) ) - Math.pow(cuts-1,3);
//       return amountOfCubes;
//     }

// const countSquares = cuts => cuts === 0 ? 1 : Math.pow(cuts+1,2)*( 2+ (cuts-1) ) - Math.pow(cuts-1,3)
function countSquares(cuts) {
  return cuts === 0 ? 1 : 6 * Math.pow(cuts, 2) + 2;
}

console.log(countSquares(0), 1);
console.log(countSquares(1), 8);
console.log(countSquares(5), 152);
console.log(countSquares(16), 1538);
console.log(countSquares(23), 3176);
