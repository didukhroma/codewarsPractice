console.log('kyu8 playing with cubes');
class Cube {
  constructor(side = 0) {
    this.side = side;
  }

  getSide() {
    return Math.abs(this.side);
  }
  setSide(n) {
    this.side = n;
  }
}

let cube = new Cube(12);
console.log(cube.getSide());
cube.setSide(42);
console.log(cube.getSide());
cube.setSide(-42);
console.log(cube.getSide());
