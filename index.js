// Your code here
class Polygon {
  constructor(array) {
    this.array = array
  }

  get getCount() {
    return this.array.length
  }

  // get count() {
  //   return this.array.length
  // }

  get perimeter() {
    let total = 0;
    for(let i = 0; i < this.array.length; i++) {
      total += this.array[i]
    }
    return total
  }
}

class Triangle extends Polygon {
  get isValid() {
    if((this.array[0] + this.array[1]) > this.array[2] && (this.array[2] + this.array[1]) > this.array[0] && (this.array[0] + this.array[2]) > this.array[1]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[0] === this.array[3]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.array[0] * this.array[0]
  }
}
