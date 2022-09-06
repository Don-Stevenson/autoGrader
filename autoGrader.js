const prompts = require("prompts");

// helpers
// **********

const { validateNum } = require("./helpers/validateNum.js");
const { validateSkew } = require("./helpers/validateSkew.js");


const randn_bm = (min, max, skew) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randn_bm(min, max, skew);
  // resample between 0 and 1 if out of range
  else {
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
  }
  return `${num.toFixed(1)}%`;
};

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

    validate: noOfPapers => validateNum(noOfPapers)
  },
  {
    type: "number",
    name: "lowestGrade",
    initial: `enter a number between 1 and 100`,
    message: `What's the lowest grade you want to give?`,
    validate: lowestGrade => validateNum(lowestGrade)
  },
  {
    type: "number",
    name: "highestGrade",
    initial: `enter a number between 1 and 100`,
    message: `What's the Highest grade you want to give?`,
    validate: highestGrade => validateNum(highestGrade)
  },
  {
    type: "number",
    name: "skew",
    initial: `enter a number between 0 and 4`,
    message: `How would you like to skew the grades? 
    a smaller skew, say, 0.25 will give more higher grades, 
    while a higher skew will give more lower grades`,
    validate: highestGrade => validateSkew(highestGrade)
  }
];

(async () => {
  const response = await prompts(questions);

  const results = () => {
    let finalGradesArr = [];
    for (let i = 1; i <= response.noOfPapers; i++) {
      finalGradesArr.push(
        randn_bm(response.lowestGrade, response.highestGrade, response.skew)
      );
    }
    return finalGradesArr;
  };

  const output = `  
    * Thank you for choosing wisely and using AutoGrader! *
    *******************************************************
   
    The list below represents the number and the grade assigned for each paper
  
    e.g. 1st paper is notated as 1' and
    the grade is then given as the corresponding value
  
    ${results()
      .map((grade, index) => `student no ${index + 1} : ${grade}`)
      .join("\n    ")}
    `;
  console.log(output);
})();
