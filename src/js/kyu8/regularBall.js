console.log('kyu8 regularBall');

class Ball {
  constructor(type = 'regular') {
    this.type = type;
  }
  get ballType() {
    return this.type;
  }
}

console.log(new Ball().ballType, 'regular');
console.log(new Ball('super').ballType, 'super');
