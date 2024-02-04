// Jest tests for shapes
const { Circle, Triangle, Square } = require("./shapes");

describe('Shapes', () => {
  it('should render a triangle with the correct attributes', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toContain('<polygon points="150,18 244,182 56,182" fill="blue"></polygon>');
  });

  it('should render a circle with the correct attributes', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toContain('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red"></circle>');
  });

  it('should render a square with the correct attributes', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toContain('<rect width="200" height="200" fill="green" x="50%" y="50%" transform="translate(-100,-100)"></rect>');
  });
});
