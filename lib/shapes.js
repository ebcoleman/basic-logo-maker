// shapes is the parent class to circle, triangle and square
class Shapes{
    constructor(){
        this.color='';
        this.text = '';
        this.textColor = '';
    }
    setColor(color){
        this.color=(color);
    }
    setText(text, color){
        this.text = text;
        this.textColor = color;
    }
}

// "extends" is adding the class Shapes to the new classes below
class Circle extends Shapes {
    render() {
        const textElement = `<text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
        const circleElement = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
        
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circleElement}${textElement}</svg>`;
    }
}

class Triangle extends Shapes {
    render() {
        const textElement = `<text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
        const triangleElement = `<polygon points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${triangleElement}${textElement}</svg>`;
    }
}

class Square extends Shapes {
    render() {
        const textElement = `<text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
        const squareElement = `<rect width="200" height="200" fill="${this.color}" x="50%" y="50%" transform="translate(-100,-100)"></rect>`;

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${squareElement}${textElement}</svg>`;
    }
}

// allows the referred classes to be used in other files
module.exports = {Triangle, Circle, Square};