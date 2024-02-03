//  Exports `Triangle`, `Circle`, and `Square` classes

class Shapes{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

// "extends" is adding the class Shapes to the new classes below
class Circle extends Shapes{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    render(){
        return `<rect x="50%" y="50%" width="200" height="200" fill="${this.color}" transform="translate(-100,-100)">`
    }
}

// allows the referred classes to be used in other files
module.exports = {Triangle, Circle, Square};