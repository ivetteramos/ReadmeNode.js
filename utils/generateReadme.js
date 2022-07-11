// TODO: Create a function that returns a license badge based on which license is passed in

const generateReadme = function(data)
{

return`# ${data.title}

## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
---

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions 
${data.questions}`}

module.exports = generateReadme;

