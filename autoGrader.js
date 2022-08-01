const prompts = require("prompts")

// helpers
// **********
const validateNum = value => {
  if (value > 200 || value < 0 || isNaN(parseFloat(value))) {
    return "Error!! Please enter a whole number between 0 and 150"
  } else return true
}

const randn_bm = () => {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  if (!num) return randn_bm()
  // Skew to avoid complaints of low grades
  if (num < 0.2) return `${(num * 100 + 25).toFixed(1)}%`
  if (num > 0.2 && num <= 0.64) return `${(num * 100 + 20).toFixed(1)}%`
  if (num > 0.65 && num <= 0.75) return `${(num * 100 + 18).toFixed(1)}%`
  if (num > 0.75 && num <= 0.85) return `${(num * 100 + 14).toFixed(1)}%`
  if (num > 0.85 && num <= 0.98) return `${(num * 100 + 2).toFixed(1)}%`
}

;(async () => {
  const response = await prompts({
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
    It progressively skews lower grades higher
    to help avoid crying students during office hours. 
    "
  
    So, how many papers do you need to mark?`,
    validate: noOfPapers => validateNum(noOfPapers),
  })

  const results = (function () {
    let finalGradesObj = {}
    for (let i = 1; i <= response.noOfPapers; i++) {
      finalGradesObj[i] = randn_bm()
    }
    return finalGradesObj
  })()

  console.log(
    `  

    * Thank you for choosing wisely and using AutoGrader! *
    *******************************************************
   
    The list below represents the number and the grade assigned for that paper
  
    e.g. 1st paper is notated as 1' and
    the grade is then given as the corresponding value
  
    Note: On occasion, a grade is listed as 'undefined',
    in that case, Autograder *strongly* encourages giving this student
    a grade of 69% 
    Nice. ;)
        
    `,
    results
  )
})()
