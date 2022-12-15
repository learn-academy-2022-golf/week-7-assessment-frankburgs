// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Errors encountered:
// Your test suite must contain at least one test.
// ReferenceError: biographies is not defined
// TypeError: biographies(...).toBe is not a function
// TypeError: biographies(...).toEqual is not a function
// TypeError: Assignment to constant variable.

describe ('biographies', () => {
  test('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {

    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    const expectedOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(biographies(people)).toEqual(expectedOutput)
  })
})

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.
// A function that takes in an array of objects
const biographies = (array1) => {

  // Capitalize first letter of every word in a string
  const capitalizeAllFirstLetters = (str1) => {

    // Capitalize the first letter of the string
    str1 = str1.replace(str1.charAt(0),str1.charAt(0).toUpperCase())

    // Find the index of the space between first and last name
    const spaceIndex = str1.indexOf(" ")

    // Replace character after space with it's uppercased self
    str1 = str1.replace(str1.charAt(spaceIndex + 1),str1.charAt(spaceIndex + 1).toUpperCase())

    // Return the properly grammarized string
    return str1
  }

  // Capitalize first letter of each word
  var y = array1.map(value => capitalizeAllFirstLetters(value.name))

  // Concat capitalized name, + " is " + occupation
  y = y.map( (value, index) => value + " is " + array1[index].occupation+".")

  // Return an array with a sentence about each person
  return y
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// Errors encountered:
// ReferenceError: remainders is not defined

describe ('remainders', () => {
  test('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {

  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const expectedOutput1 = [ 2, 0, -1, 0 ]

  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  const expectedOutput2 = [ 2, 1, -1 ]

  expect(remainders(hodgepodge1)).toEqual(expectedOutput1)
  expect(remainders(hodgepodge2)).toEqual(expectedOutput2)
  })
})

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// b) Create the function that makes the test pass.
// A function that takes in an array of mixed data types
const remainders = (mixedArray) => {
  // Filter array to only numbers
  const filtered = mixedArray.filter(value => typeof value == 'number')
  // Return each number modulus 3
  return filtered.map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// Errors received:
// ReferenceError: cubeTheSum is not defined

describe ('cubeTheSum', () => {
  test('takes in an array of numbers and returns the sum of all the numbers cubed', () => {

    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const expectedOutput1 = 99

    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    const expectedOutput2 = 1125

  expect(cubeTheSum(cubeAndSum1)).toEqual(expectedOutput1)
  expect(cubeTheSum(cubeAndSum2)).toEqual(expectedOutput2)
  })
})

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.
// A function that takes in an array
const cubeTheSum = (arrayNum) => {
  
  // Create array with each number cubed
  const arrayNumCubed = arrayNum.map(value => Math.pow(value,3))
  console.log(arrayNumCubed)

  // Set counter to 0
  var sum = 0

  // Sum over the array
  arrayNumCubed.forEach(element => sum += element)

  // Return the sum
  return sum
}
