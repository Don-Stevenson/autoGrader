const skewMin = 0;
const skewMax = 4;
const paperMin = 0;
const paperMax = 200;
const gradeMin = 0;
const gradeMax = 100;
const { validateIsNumBetween } = require("./validateIsNumBetween")

const questions = [
  {
    type: "number",
    name: "noOfPapers",
    initial: `number between 1 and 200`,
    message: `
  * Welcome to AutoGrader! *
  **************************
  
  A program to help you mark when you're feeling like,
  
  (┛ಠ_ಠ)┛ 彡 ┻━┻
  
  "fuck it, Imma throw these papers down the stairs
  and assign marks based on where they land", 
  but wisely remember, these papers are digital 
  and I still need my laptop
  
  Note: Autograder marks on a bell curve. 
  It can progressively skew lower grades higher
  to help avoid crying students during office hours. 
  
  
  So, how many papers do you need to mark?`,

    validate: noOfPapers => validateIsNumBetween(noOfPapers, paperMin, paperMax)
  },
  {
    type: "number",
    name: "lowestGrade",
    initial: `enter a number between 1 and 100`,
    message: `What's the lowest grade you want to give?`,
    validate: lowestGrade => validateIsNumBetween(lowestGrade, gradeMin, gradeMax)
  },
  {
    type: "number",
    name: "highestGrade",
    initial: `enter a number between 1 and 100`,
    message: `What's the Highest grade you want to give?`,
    validate: highestGrade => validateIsNumBetween(highestGrade, gradeMin, gradeMax)
  },
  {
    type: "number",
    float: true,
    name: "skew",
    initial: `enter a number between 0 and 4`,
    message: `How would you like to skew the grades? 
      a smaller skew, say, 0.25 will produce more higher grades, 
      while a higher skew of say 3, will produce more lower grades`,
    validate: skew => validateIsNumBetween(skew, skewMin, skewMax)
  }
];

exports.questions = questions;
