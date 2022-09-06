const prompts = require("prompts");

// helpers
// **********
const { randn_bm } = require("./helpers/random_bm.js");
const {questions } = require("./helpers/questions")

;(async () => {
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
    
    ${results()
      .map((grade, index) => `student no ${index + 1} : ${grade}`)
      .join("\n    ")}
    `;
  console.log(output);
})();
