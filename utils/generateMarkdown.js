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
  
# ${data.title}
  ${data.description}
  ${data.licenseBadge}
  [A deployed version can be viewed here.](${data.URL})
  
---
## Contents
A. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
B. [Installation](#installation)
    1. [License](#license)
    2. [Contributing](#contributing)
    3. [Tests](#tests)
    4. [Authors and acknowledgment](#authors%20and%20acknowledgment)
    ---
    ## About
      ${data.about}
    ---
    ## User Story
      
    ---
    ## Acceptance Criteria
      
      
    ---
    ## Visuals:

    ![]()
---
## Installation:
  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  
---

## License
  License used for this project - ${licenseBadge.data}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.

---

## Tests:
  ${data.test}
---
## Authors and Acknowledgments
  ${data.author}
---
## Contact Information:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
  
`;
}


module.exports = generateMarkdown;