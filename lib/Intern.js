// import Employee
// define class
  // constructor
    // call the parent constructor (super)
    // assign the school variable
  // define the getSchool method
  // define the getRole method
//export the module

const Employee=require('./Employee.js');
class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);
    this.school=school;

  }
  getSchool(){
    return this.school;
  }
  getRole(){
    return 'Intern';
  }
}
module.exports=Intern;