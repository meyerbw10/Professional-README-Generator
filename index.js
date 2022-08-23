// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "checkbox",
      name: "contact",
      message: "What languages do you know? Select languages using space bar",
      choices: ["English", "French", "German", "Mandarin", "Catalonian", "Klingon", "Elvish", "Pig Latin"]
    },
    {
      type: "list",
      name: "license",
      message: "What License would you like?",
      choices: ["MIT", "Apache", "asdf", "fdsa", "none"]
    }
];
// TODO: Create a function to write README file

function writeToFile(data) {
  
  fs.writeFile('example.md', generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile(data);
    })
}

// Function call to initialize app
init();
