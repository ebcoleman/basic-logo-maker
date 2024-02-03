// Jest tests for shapes
const {Circle, Triangle, Square} = require("./shapes");

// code from readme: "following example test should pass"
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Shapes', () => {
    it('should render a triangle with the correct attributes', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  
    it('should render a circle with the correct attributes', () => {
      const circle = new Circle();
      circle.setColor('red');
      expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red">');
    });
  
    it('should render a square with the correct attributes', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.render()).toEqual('<rect x="50%" y="50%" width="200" height="200" fill="green" transform="translate(-100,-100)">');
    });
  });