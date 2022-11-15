const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const html = require("./lib/generateHtml.js");

let manager;
const team = [];

function initialize() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ]);
}

function buildTeam() {
  generateHTML();
}

function generateHTML() {
  let blocks = [];
  blocks.push(html.header());
  blocks.push(manager.getHTML());
  blocks.push(html.footer());

  htmlCode = html.header();
  htmlCode += manager.getHTML();
  htmlCode += html.footer();

  fs.writeFile("team.html", htmlCode, (err) => {
    if (err) {
      throw err;
    }
    console.log("Your HTML has been created");
  });
  open("Team.html");
}

initialize().then((answers) => {
  manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  buildTeam();
});
