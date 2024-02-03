//  Runs the application using imports from lib/
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter your text(up to 3 characters).',
        },
        {
            type: 'input',
            name: 'text-color',
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
            name: 'shape-color',
            message: 'Please choose your shape color using a color keyword or hexadecimal number.',
        },
    ])
