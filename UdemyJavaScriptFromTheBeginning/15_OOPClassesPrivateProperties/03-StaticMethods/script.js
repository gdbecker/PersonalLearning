class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  
  area() {
    return this.height * this.width;
  }

  static getClass() {
    return 'Static method';
  }
}

const rect = new Rectangle('Rect 1', 20, 24);
console.log(rect.area());
console.log(Rectangle.getClass()); // using the static method
