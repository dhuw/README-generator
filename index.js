//required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//connects other files together
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;
//allows async for func
const writeFileAsync = util.promisify(fs.writeFile);
//init and create .md readme file
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      answers.licenseBadge = licenseBadge(answers.license);
      let readMeData = generateMarkdown(answers);
      await writeFileAsync("created-README.md", readMeData);
    } catch (err) {
      throw err;
    }
  }
//initialize program
  init();
