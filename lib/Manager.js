const Employee = require("./Employee.js");
const html = require("./htmlValues.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  getRole() {
    return "Manager";
  }
  getHTML() {
    return html.manager(this);
  }
}
module.exports = Manager;
