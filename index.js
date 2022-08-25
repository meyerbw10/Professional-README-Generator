// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the Title of your Project?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe the Project you are working on in detail.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your application?",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe how to use the application. How does a user use it?",
    },
    {
      type: "list",
      name: "license",
      message: "How do you install your application?",
      choices: ["MIT", "Apache", "GPL", "BSD"]
    },
    {
      type: "input",
      name: "github",
      message: "Enter GitHub Username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Email.",
    },
    
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
