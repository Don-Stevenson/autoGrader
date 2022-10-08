// requires & imports
const prompts = require("prompts")
const { generateGrades } = require("./helpers/generateGrades.js")
const { questions } = require("./helpers/questions")

  // run the program
  ; (async () => {
    const { noOfPapers, skew, lowestGrade, highestGrade } = await prompts(
      questions
    )

    const header = `  
  * Thank you for choosing wisely and using AutoGrader! *
  *******************************************************
 
  The list below represents the number and the grade assigned for each paper`

    if (
      !noOfPapers ||
      skew < 0 ||
      lowestGrade < 0 ||
      highestGrade > 100 ||
      lowestGrade > highestGrade
    ) console.log(' AutoGrader has been aborted. Goodbye!')
    else if (!noOfPapers || !skew || !lowestGrade || !highestGrade) console.log(
      `a problem has been detected with one or more of the values entered. 
       Please double check your entries and try again.`
    )
    else
      console.log(
        header,
        "\n\n ",
        generateGrades(lowestGrade, highestGrade, noOfPapers, skew)
          .map((grade, index) => `student no ${index + 1} : ${grade} `)
          .join("\n  ")
      )
  })()
