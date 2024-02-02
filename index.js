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
            message: 'Please choose your text color.',
        },
        // {
        //     type: 'list',
        //     name: 'shape',
        //     message: ['circle', 'triangle', 'square'],
        // },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Please choose your shape color.',
        },
    ])
