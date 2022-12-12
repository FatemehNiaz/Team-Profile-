const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const html = require("./lib/htmlValues.js");

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
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What team member would you like to add?",
        choices: ["Intern", "Engineer", "Done"],
      },
    ])
    .then((answer) => {
      if (answer.role === "Intern") {
        // create an intern

        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email?",
            },
            {
              type: "input",
              name: "school",
              message: "What is the intern's school?",
            },
          ])
          .then((answers) => {
            intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            team.push(intern);
            buildTeam();
          });
      } else if (answer.role === "Engineer") {
        // create an engineer
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Engineer's ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Engineer's email?",
            },
            {
              type: "input",
              name: "github",
              message: "What is the Engineer's github?",
            },
          ])
          .then((answers) => {
            engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            );
            team.push(engineer);
            buildTeam();
          });
      } else {
        generateHTML();
      }
    });
}

function generateHTML() {
  /*let blocks = [];
  blocks.push(html.header());
  blocks.push(manager.getHTML());
  blocks.push(html.footer());*/

  htmlCode = html.header();
  htmlCode += manager.getHTML();
  for (let i = 0; i < team.length; i++) {
    employee = team[i];
    htmlCode += employee.getHTML();
  }
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
