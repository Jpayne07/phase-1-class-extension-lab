// Your code here
class Polygon{
    constructor(integers){
        this.integers = integers;

    }
    get countSides(){
        return this.integers.length

    }
    
    get perimeter() {
        return this.integers.reduce((sum, element) => sum + element, 0);
      }
      
}



class Triangle extends Polygon {
    constructor(integers) {
      super(integers);
    }
  
    get isValid() {
      if (this.countSides === 3) {
        if (
          this.integers[0] + this.integers[1] > this.integers[2] &&
          this.integers[0] + this.integers[2] > this.integers[1] &&
          this.integers[1] + this.integers[2] > this.integers[0]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  class Square extends Polygon {
    constructor(integers) {
      super(integers);
    }
  
    get isValid() {
      if (this.countSides === 4) {
        const [side1, side2, side3, side4] = this.integers;
        return side1 === side2 && side2 === side3 && side3 === side4;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        return this.integers[0] * this.integers[0];
      }
    }
  }
