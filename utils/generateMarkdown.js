//license badge function
function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
    if (licenseType === "GNU AGPLv3") {
      licenseString =  `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (value === "GNU GPLv3") {
      licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (value === "GNU LGPLv3") {
      licenseString = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (value === "Mozilla") {
      licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (value === "MIT") {
      licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (value === "Apache") {
      licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else {
      licenseString = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } return licenseString
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  <h1 align="center">${data.title} 👋</h1>
  
  <h3 align="center">![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)</h3><br />
  ## Description
  🔍 ${data.about}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ## Installation
  💾 ${data.install}
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributing
  👪 ${data.creator}
  ## Tests
  ✏️ ${data.test}
  <br />
  :octocat: Find me on GitHub: [${data.userName}](https://github.com/${data.userame})<br />
  <br />
  ✉️ Email me with any questions: ${data.userEmail}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
      `;
    }


module.exports = generateMarkdown;