const prompts = require("prompts");
const { generateGrades } = require("./helpers/generateGrades.js");
const { questions } = require("./helpers/questions");

(async () => {
  const response = await prompts(questions);

  const header = `  
  * Thank you for choosing wisely and using AutoGrader! *
  *******************************************************
 
  The list below represents the number and the grade assigned for each paper`;
  console.log(
    header,
    "\n\n ",
    generateGrades(response)
      .map((grade, index) => `student no ${index + 1} : ${grade}`)
      .join("\n  ")
  );
})();
