// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
    return `![github license](https://img.shields.io/badge/License-${license}-green)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'apache') {
    return "appache link"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none') {
    return '# License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


# Table of Contents 
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](##License)
[Contributing](#Contributing)
[Questions](#Questions)


---


## Description 
${data.description}



---

## Installation 
${data.installation}


---

## Usage 
${data.usage}


---

## License 

${renderLicenseBadge(data.license)}

---


## Contributing 



---


## Tests 



---




## Questions 
How to contact me for Questions:
[${data.github}](https://github.com/${data.github})
${data.email}



`;
}

module.exports = generateMarkdown;
