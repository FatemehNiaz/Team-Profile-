const Employee = require("./Employee.js");
const html = require("./htmlValues.js");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  getHTML() {
    return html.engineer(this);
  }
}
module.exports = Engineer;
