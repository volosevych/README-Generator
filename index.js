const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promtUser() {
    return inquirer.promt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your Project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation for this Project. Write NONE if no instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this Project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test Instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a licence.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Whose Credit is this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


