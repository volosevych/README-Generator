var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promtUser() {
    return inquirer.prompt([{
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

function generateMarkdown(response) {
    return `
# ${response.title}
# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license) 
- [Questions](#questions)
## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
    ${response.description}
## Installation:
    ${response.installation}
## Usage:
    ${response.usage}
## Contributing:
    ${response.contribution}
## Test:
    ${response.test}
## Credits:
    ${response.credit}
## License:
    For more information about the License, click on the link below.
    
- [License](https://opensource.org/licenses/${response.license})
## Questions:
    For questions about the Generator you can go to my 
    GitHub page at the following Link: 
- [GitHub Profile](https://github.com/${response.username})
For additional questions please reach out to my email at: ${response.email}.
    Here is a video on how to work the application.
`;
}

// function to initialize program
async function init() {
    try {
        const response = await promtUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();