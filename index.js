const generateReadme = require('./utils/generateReadme')
const fs = require('fs');
const inquirer = require('inquirer');

const questions =  [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide a link to your Repo?',
        name: 'repolink',
    },
    {
        type: 'input',
        message: 'Please provide a link to your Readme',
        name: 'readmeLink',
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "projectDescription"
    },
    {
        type: 'list',
        message: 'What type of license does your project have?',
        name: 'license',
        choices: [ "MIT",
        "Unlicense",
        "Apache",
        "GNU",
        "BSD",
        ]
    },
    {
        type: "input",
        message: "What is the installation of your project?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What is the usage information of your project?",
        name: "usage"
    },
    
];

function fileCreator(fileName, data)
{
        fs.writeFile(fileName, data, function(err){
                console.log(fileName)
                console.log(data)
                if (err) {
                        return console.log(err)
                } else {
                        console.log("Success! Readme is Ready!")
                }

        })
}
function runProgram() 
{
        inquirer.prompt(questions)
        .then(function(data){
                fileCreator("README.md", generateReadme(data));
                console.log(data)
        })
}

runProgram();