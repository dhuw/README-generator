//required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser() {
  return inquirer.prompt([
      {
          type: "input",
          name: "title",
          message: "What is the title of your project?"
      },
      {
          type: "input",
          name: "desc",
          message: "Use one sentence to describe your project."
      },
      {
          type: "input",
          name: "about",
          message: "Tell me more about the project."
      },
      {
          type: "input",
          name: "about",
          message: "Tell me more about the project."
      },
      {
          type: "input",
          name: "install",
          message: "What are the installation instructions?"
      },
      {
          type: "input",
          name: "clone",
          message: "What is the url to clone the repo?"
      },
      {
          type: "list",
          name: "license",
          message: "Select the appropiate license.",
          choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
          ],
      },
      {
          type: "input",
          name: "test",
          message: "Enter the testing methods used in the project."
      },
      {
          type: "input",
          name: "creator",
          message: "What is your name?"
      },
      {
          type: "input",
          name: "userName",
          message: "What is your gitHub username?"
      },
      {
          type: "input",
          name: "userEmail",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "URL",
          message: "What is the URL of the live site?",
        },
        {
          type: "input",
          name: "repo",
          message: "What is the URL of the github repo?",
        },
      ];
  ])
}