const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes");

function generateLogo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Please enter your text (up to 3 characters).',
        // validate is making sure only 3 characters are input, and will error if more than 3 are input
        validate: function(input){
        if (input.trim().length === 0 || input.length > 3) {
          return "Please enter up to 3 characters."
        }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please choose your text color using a color keyword or hexadecimal number.',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape.',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose your shape color using a color keyword or hexadecimal number.',
      },
    ])
    .then((answers) => {
      let logoShape;
      switch (answers.shape) {
        case 'Circle':
          logoShape = new Circle();
          break;
        case 'Triangle':
          logoShape = new Triangle();
          break;
        case 'Square':
          logoShape = new Square();
          break;
      }

      logoShape.setText(answers.text, answers.textColor);
      logoShape.setColor(answers.shapeColor);

      const svg = logoShape.render();

      const fileName = 'logo.svg';
      const filePath = `examples/${fileName}`;

      // creates "examples" directory if it doesn't exist
      if (!fs.existsSync('examples')) {
        fs.mkdirSync('examples');
      }

      fs.writeFileSync(filePath, svg);

      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.log('Error generating logo:', error);
    });
}

// calls the generateLogo function
generateLogo();