const Intern = require("../lib/Intern")

// this tell us what the goal  of our test is
test("creates an intern object, thats name value is a string", () => {
  // create a variable that holds thenew Objects data
  const intern = new Intern("Fatemeh", 1, "fatemeh@gmail.com", "Upenn")

  // this is what we are TESTING(checking)
  expect(intern.name).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an intern object, thats id value is a number", () => {
  // create a variable that holds thenew Objects data
  const intern = new Intern("Fatemeh", 1, "fatemeh@gmail.com", "Upenn")

  // this is what we are TESTING(checking)
  expect(intern.id).toEqual(expect.any(Number))
})

// this tell us what the goal  of our test is
test("creates an intern object, thats email value is a string", () => {
  // create a variable that holds thenew Objects data
  const intern = new Intern("Fatemeh", 1, "fatemeh@gmail.com", "Upenn")

  // this is what we are TESTING(checking)
  expect(intern.email).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an intern object, thats school value is a string", () => {
  // create a variable that holds thenew Objects data
  const intern = new Intern("Fatemeh", 1, "fatemeh@gmail.com", "Upenn")

  // this is what we are TESTING(checking)
  expect(intern.school).toEqual(expect.any(String))
})