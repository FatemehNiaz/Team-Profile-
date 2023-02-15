const Engineer = require("../lib/Engineer")

// this tell us what the goal  of our test is
test("creates an engineer object, thats name value is a string", () => {
  // create a variable that holds thenew Objects data
  const engineer = new Engineer("Fatemeh", 1, "fatemeh@gmail.com", "fatemeh123")

  // this is what we are TESTING(checking)
  expect(engineer.name).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an engineer object, thats id value is a number", () => {
  // create a variable that holds thenew Objects data
  const engineer = new Engineer("Fatemeh", 1, "fatemeh@gmail.com", "fatemeh123")

  // this is what we are TESTING(checking)
  expect(engineer.id).toEqual(expect.any(Number))
})

// this tell us what the goal  of our test is
test("creates an engineer object, thats email value is a string", () => {
  // create a variable that holds thenew Objects data
  const engineer = new Engineer("Fatemeh", 1, "fatemeh@gmail.com", "fatemeh123")

  // this is what we are TESTING(checking)
  expect(engineer.email).toEqual(expect.any(String))
})

// this tell us what the goal  of our test is
test("creates an engineer object, thats github value is a string", () => {
  // create a variable that holds thenew Objects data
  const engineer = new Engineer("Fatemeh", 1, "fatemeh@gmail.com", "fatemeh123")

  // this is what we are TESTING(checking)
  expect(engineer.github).toEqual(expect.any(String))
})