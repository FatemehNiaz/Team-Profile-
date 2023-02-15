const Manager = require("../lib/Manager")

// this tell us what the goal  of our test is
test("creates an manager object, thats name value is a string", () => {
  // create a variable that holds thenew Objects data
  const manager = new Manager("Fatemeh", 1, "fatemeh@gmail.com", 122)

  // this is what we are TESTING(checking)
  expect(manager.name).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an manager object, thats id value is a number", () => {
  // create a variable that holds thenew Objects data
  const manager = new Manager("Fatemeh", 1, "fatemeh@gmail.com", 122)

  // this is what we are TESTING(checking)
  expect(manager.id).toEqual(expect.any(Number))
})

// this tell us what the goal  of our test is
test("creates an manager object, thats email value is a string", () => {
  // create a variable that holds thenew Objects data
  const manager = new Manager("Fatemeh", 1, "fatemeh@gmail.com", 122)

  // this is what we are TESTING(checking)
  expect(manager.email).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an manager object, thats office number value is a number", () => {
  // create a variable that holds thenew Objects data
  const manager = new Manager("Fatemeh", 1, "fatemeh@gmail.com", 122)

  // this is what we are TESTING(checking)
  expect(manager.officeNumber).toEqual(expect.any(Number))
})