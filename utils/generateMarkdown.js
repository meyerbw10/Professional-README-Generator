// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
    return '//badge URL'
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
  return `# Title
  ${data.name}

  #table of contents 


  #license
  ${renderLiceseSection(license)}


  ${renderlicenseBadge(data.license)}



  #email 
  ${data.contact}


`;
}

module.exports = generateMarkdown;
